require('@/helpers/customGenerators')({
  context: this,
  baseURL: '',
  methods: [],

  custom: {
    renewToken: {
      method: 'POST',
      baseURL: '/profile/renew_access_token'
    },

    create: {
      method: 'POST',
      baseURL: '/$account_id/api_tokens',
      urlParams: ['account_id']
    },

    destroy: {
      method: 'DELETE',
      baseURL: '/$account_id/api_tokens/$id',
      urlParams: ['account_id', 'id']
    },

    list: {
      method: 'GET',
      baseURL: '/$account_id/api_tokens',
      urlParams: ['account_id']
    }
  }
})