// Native Promise only available since 0.11.13
const Promise = typeof global.Promise === 'function' ? global.Promise : require('bluebird')

module.exports = Promise
