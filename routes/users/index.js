rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/$account_id',
  methods: [],
  warning: "This routes uses `user_token` instead of `api_token`: iugu.setTokenAuthorization(user_token)",

  custom: {
    'list': {
      method: 'GET',
      baseURL: '/users',
      urlParams: ['account_id'],
    },

    'create': {
      method: 'POST',
      baseURL: '/user_invites',
      urlParams: ['account_id'],
    }
  }
})