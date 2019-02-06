module.exports = class IuguError extends Error {
  constructor (message, payload) {
    // Calling parent constructor of base Error class.
    super(message)

    // Saving class name in the property of our custom error as a shortcut.
    this.name = 'IuguError'

    if(payload) {
      this.errors = payload
    }

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor)
  }
}