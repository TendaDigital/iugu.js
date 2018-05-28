rootRequire('/helpers/customGenerators')({
  context: this,
  baseURL: '/customers',
  methods: ['create', 'destroy', 'get', 'list', 'update'],
})