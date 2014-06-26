const Promise = require('./promise')
    , XMLParser = require('xml-parser')

module.exports = function (req) {
  req = req.req || req

  return new Promise(function (resolve, reject) {
    var xml

    req
      .on('data', function (data) {
        xml = XMLParser(data.toString())
      })
      .on('error', function (err) {
        reject(err)
      })
      .on('end', function () {
        resolve(xml)
      })
  })
}
