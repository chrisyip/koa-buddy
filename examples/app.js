var koa = require('koa')
  , jade = require('koa-jade')
  , buddy = require('..')
  , app = koa()

app.use(buddy())

app.use(jade.middleware({
  viewPath: __dirname + '/views',
  noCache: true,
  debug: true
}))

app.use(function* (next) {
  var data = {};

  if (this.method === 'POST') {
    console.log(this.request.body)
    data.postBody = JSON.stringify(this.request.body)
  }

  yield this.render('index', data, true)

  yield next
})

app.listen(3000)
