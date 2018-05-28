rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/transfers',
  methods: ['create', 'get', 'list'],
})