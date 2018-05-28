rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/web_hooks',
  methods: ['create', 'destroy', 'get', 'list', 'update'],

  custom: {
    supportedEvents: {
      method: 'GET',
      baseURL: '/supported_events'
    },
  }
})