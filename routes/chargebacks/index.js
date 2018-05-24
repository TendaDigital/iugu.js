require('@/helpers/customGenerators')({
  context: this,
  baseURL: '/chargebacks',
  methods: ['get', 'list'],

  custom: {
    contest: {
      method: 'PUT',
      baseURL: '/$id/contest',
      urlParams: ['id']
    },

    accept: {
      method: 'PUT',
      baseURL: '/$id/accept',
      urlParams: ['id']
    },
  }
})