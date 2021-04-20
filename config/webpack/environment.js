const { environment } = require('@rails/webpacker')

environment.config.merge(require('./custom'))

module.exports = environment
