rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/marketplace',
  methods: ['list'],

  custom: {
    createAccount: {
      method: 'POST',
      baseURL: '/create_account',
    },
  }
})