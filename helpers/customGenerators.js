module.exports = function({ baseURL, methods, urlParams, context, custom }) {
  if(!urlParams) urlParams = []
  if(baseURL == null || !methods || !context) {
    throw new Error('You must set baseURL, methods and context')
  }

  const defaultMethods = {
    create : 'POST',
    update : 'PUT',
    destroy: 'DELETE',
    list   : 'GET',
    get    : 'GET', 
  }

  // iterate on methods and check if we have a custom one
  let generated = methods.reduce((response, method) => {
    let url = baseURL
    let generateParams = urlParams

    // crud based
    if(['update', 'get', 'destroy'].includes(method)) {
      url = `${url}/$id`
      generateParams = generateParams.concat(['id'])
    }

    response[method] = generateGeneric({
      method: defaultMethods[method],
      baseURL: url,
      urlParams: generateParams
    })

    return response
  }, {})

  // generate custom functions
  if(custom && Object.keys(custom).length){
    Object.keys(custom).forEach(key => {
      custom[key].baseURL = baseURL + custom[key].baseURL
      generated[key] = generateGeneric(custom[key])
    })
  }

  // set properties on context
  Object.keys(generated).forEach(key => {
    context[key] = generated[key]
  })

  function generateGeneric({ baseURL, method, urlParams }){
    if(!urlParams) urlParams = []
    if(baseURL == null || !method) {
      throw new Error('Missing stuff')
    }

    return function (params = {}){
      this.helpers.throwRequired(urlParams, params)

      const { data } = params

      let url = urlParams.reduce((url, u) => { return url.replace('$' + u, params[u]) }, baseURL)

      const query = {
        method: method,
        url: url
      }

      query.data = params

      return this.axios(query)
    }
  }
}
