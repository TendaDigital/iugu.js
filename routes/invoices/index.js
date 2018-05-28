rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/invoices',
  methods: ['create', 'get', 'list'],

  custom: {
    duplicate: {
      method: 'POST',
      baseURL: '/$id/duplicate',
      urlParams: ['id']
    },
    cancel: {
      method: 'PUT',
      baseURL: '/$id/cancel',
      urlParams: ['id']
    },
    capture: {
      method: 'POST',
      baseURL: '/$id/capture',
      urlParams: ['id']
    },
    refund: {
      method: 'POST',
      baseURL: '/$id/refund',
      urlParams: ['id']
    },
    sendEmail: {
      method: 'POST',
      baseURL: '/$id/send_email',
      urlParams: ['id']
    }
  }
})