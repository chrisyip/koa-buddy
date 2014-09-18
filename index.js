/**
 * Request body parser for Koa
 *
 * @author Chris <i@chrisyip.im>
 * @link https://github.com/chrisyip/koa-jade
 */

const co = require('co-body')
    , text = require('./lib/text')
    , buffer = require('./lib/buffer')
    , xml = require('./lib/xml')
    , multipart = require('./lib/multipart')

function* parser (ctx) {
  var body

  if (ctx.is('text/*')) {
    body = yield text(ctx)
  } else if (ctx.is('json')) {
    body = yield co.json(ctx)
  } else if (ctx.is('xml')) {
    body = yield xml(ctx)
  } else if (ctx.is('urlencoded')) {
    body = yield co.form(ctx)
  } else if (ctx.is('multipart')) {
    body = yield multipart(ctx)
  } else {
    // return stream buffer for unsupported content-type
    body = yield buffer(ctx)
  }

  return body
}

module.exports = function () {
  return function* (next) {
    switch (this.method) {
      case 'PATCH':
      case 'POST':
      case 'PUT':
      case 'TRACE':
        this.request.body = yield parser(this)
        break;
    }

    yield next
  }
}
