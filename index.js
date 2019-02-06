const _ = require('lodash')
const path = require('path')
const Axios = require('axios')
const requireSmart = require('require-smart')
const helpers = requireSmart('./helpers')
const IuguError = require('./errors/IuguError')

var Module = require('module')
var originalRequire = Module.prototype.require

global.rootRequire = function (name, ...args) {
  let absolute = path.join(__dirname, name.substring(1))
  return originalRequire.apply(this, [absolute, ...args])
}

module.exports = Iugu

function Iugu() {
  this.baseURL = 'https://api.iugu.com/v1'
  this.timeout = 15000
  this.headers = { Accept: 'application/json, text/plain, */*' }
  this.helpers = helpers
  this.api_token = null

  this.axios = Axios.create({
    baseURL: this.baseURL,
    timeout: this.timeout,
    headers: this.headers,
  })

  this.axios.interceptors.request.use((config) => {
    if(this.api_token && !_.get(config, 'params.api_token', null)) {
      config.params = { api_token: this.api_token }
    }

    return config
  })

  this.axios.interceptors.response.use((response) => {
    if(response.data && response.data.errors) {
      const error = response.data
      const msg = _.get(response, 'statusText', 'Empty Message')
      return Promise.reject(new IuguError(msg, error))
    }

    return response.data
  }, function (error) {
    const msg = _.get(error.response, 'statusText', 'Empty Message')
    // get request params
    const requestParams = _.pick(error.response.config, ['method', 'baseURL', 'url', 'data', 'params'])
    _.unset(requestParams, 'params.api_token')

    // get error
    error = _.get(error, 'response.data', {})
    error.request = requestParams

    return Promise.reject(new IuguError(msg, error))
  })

  this.setHeaders = (headers) => {
    this.headers = headers
    this.rebuildConnector()
  }

  this.setTimeout = (timeout) => {
    this.timeout = timeout
    this.rebuildConnector()
  }

  this.setBasicAuthorization = (authorization) => {
    this.headers = _.merge(this.headers, {
      'Authorization': `Basic ${authorization}`
    })

    this.rebuildConnector()
  }

  // deprecated method
  this.setAuthorization = this.setBasicAuthorization

  this.setTokenAuthorization = (token) => {
    this.api_token = token
  }

  this.rebuildConnector = () => {
    this.axios.defaults.baseURL = this.baseURL
    this.axios.defaults.timeout = this.timeout
    this.axios.defaults.headers.common = this.headers
  }

  this.rebuildConnector()

  let api = requireSmart('./routes')
  let routes = Object.keys(helpers.flatten(api))

  for(route of routes) {
    let fn = _.get(api, route)
    if(_.isFunction(fn)) {
      if(_.get(this, route, null)) throw new Error('Path already setted')
      _.set(this, route, fn.bind(this))
    }
  }

  this.methods = routes
}
