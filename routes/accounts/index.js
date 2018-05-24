require('@/helpers/customGenerators')({
  context: this,
  baseURL: '/accounts',
  methods: ['get'],

  custom: {
    configuration: {
      method: 'POST',
      baseURL: '/configuration',
    },

    requestwithdraw: {
      method: 'POST',
      baseURL: '/$id/request_withdraw',
      urlParams: ['id']
    },

    requestVerification: {
      method: 'POST',
      baseURL: '/$account_id/request_verification',
      urlParams: ['account_id']
    },

    financial: {
      method: 'GET',
      baseURL: '/financial',
    },

    invoices: {
      method: 'GET',
      baseURL: '/invoices',
    }
  }
})