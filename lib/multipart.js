const Promise = require('./promise')
    , Multiparty = require('multiparty')

module.exports = function (req) {
  req = req.req || req

  return new Promise(function (resolve, reject) {
    var form = new Multiparty.Form()

    form.parse(req, function (err, fields, files) {
      if (err) {
        reject(err)
      } else {
        resolve({
          fields: fields,
          files: files
        })
      }
    })
  })
}
