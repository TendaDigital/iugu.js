rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/plans',
  methods: ['create', 'destroy', 'get', 'list', 'update'],
})