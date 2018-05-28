rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/emails',
  methods: ['create', 'destroy', 'get', 'list', 'update'],

  custom: {
    supportedEmails: {
      method: 'GET',
      baseURL: '/supported_emails'
    },

    searchLayout: {
      method: 'GET',
      baseURL: '/default_layout/$id',
      urlParams: ['id']
    },

    preview: {
      method: 'GET',
      baseURL: '/preview/$id',
      urlParams: ['id']
    },

    test: {
      method: 'POST',
      baseURL: '/test/$id',
      urlParams: ['id']
    }
  }
})