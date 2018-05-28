rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/financial_transaction_requests',
  methods: ['get'],

  custom: {
    simulateAdvance: {
      method: 'GET',
      baseURL: '/advance_simulation'
    },

    advance: {
      method: 'POST',
      baseURL: '/advance',
    },
  }
})