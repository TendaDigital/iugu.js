rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/dunning_steps',
  methods: [],

  custom: {
    get: {
      method: 'GET',
      baseURL: ''
    },

    update: {
      method: 'PUT',
      baseURL: ''
    },
  }
})