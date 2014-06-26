const Promise = require('./promise')
    , buffer = require('./buffer')

module.exports = function (ctx) {
  return new Promise(function (resolve, reject) {
    buffer(ctx)
      .then(function (buff) {
        resolve(buff.toString())
      }, function (err) {
        reject(err)
      })
  })
}
