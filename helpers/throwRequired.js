const _ = require('lodash')

module.exports = function throwMissingParameter(fields, obj) {
  if(!_.isArray(fields)) fields = [fields]
  if(!_.isObject(obj)) throw new Error('Parameter object not recieved')

  fields.forEach(field => {
    let exists = field in obj
    if(!exists) throw new Error(field)
  })
}
