const Promise = require('./promise')

module.exports = function (req) {
  req = req.req || req

  return new Promise(function (resolve, reject) {
    var buffer

    req
      .on('data', function (data) {
        buffer = data
      })
      .on('error', function (err) {
        reject(err)
      })
      .on('end', function () {
        resolve(buffer)
      })
  })
}
