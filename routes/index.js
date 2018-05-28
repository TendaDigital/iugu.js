rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '',
  methods: [],

  custom: {
    paymentToken: {
      method: 'POST',
      baseURL: '/payment_token',
    },

    charge: {
      method: 'POST',
      baseURL: '/charge',
    },

    interest: {
      method: 'GET',
      baseURL: '/utilities/interest',
    }
  }
})