const _ = require('lodash')
const path = require('path')
const Axios = require('axios')
const requireSmart = require('require-smart')
const helpers = requireSmart('./helpers')

var Module = require('module')
var originalRequire = Module.prototype.require

global.rootRequire = function (name, ...args) {
  let absolute = path.join(__dirname, name.substring(1))
  return originalRequire.apply(this, [absolute, ...args])
}

module.exports = Iugu

function Iugu() {
  this.baseURL = 'https://api.iugu.com/v1'
  this.timeout = 5000
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
    return response.data
  }, function (error) {
    return Promise.reject(_.get(error, 'response.data', error))
  })

  this.setHeaders = (headers) => {
    this.headers = headers
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
