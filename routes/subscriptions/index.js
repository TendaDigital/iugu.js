require('@/helpers/customGenerators')({
  context: this,
  baseURL: '/subscriptions',
  methods: ['create', 'destroy', 'get', 'list', 'update'],

  custom: {
    activate: {
      method: 'POST',
      baseURL: '/$id/activate',
      urlParams: ['id']
    },

    suspend: {
      method: 'POST',
      baseURL: '/$id/activate',
      urlParams: ['id']
    },

    changePlanSimulation: {
      method: 'GET',
      baseURL: '/$id/change_plan_simulation/$plan_identifier',
      urlParams: ['id', 'plan_identifier']
    },

    changePlan: {
      method: 'POST',
      baseURL: '/$id/change_plan/$plan_identifier',
      urlParams: ['id', 'plan_identifier']
    },

    addCredits: {
      method: 'PUT',
      baseURL: '/$id/add_credits',
      urlParams: ['id']
    },

    removeCredits: {
      method: 'PUT',
      baseURL: '/$id/remove_credits',
      urlParams: ['id']
    },
  }
})