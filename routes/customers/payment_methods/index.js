rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/customers/$customer_id/payment_methods',
  methods: ['create', 'destroy', 'get', 'list', 'update'],
  urlParams: ['customer_id']
})