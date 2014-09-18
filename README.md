# koa-buddy

[![Node version][node-image]][npm-url] [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Travis CI][travis-image]][travis-url]

Request body parser for Koa

# Usage

```bash
npm install --save koa-buddy
```

```js
const app = require('koa')()
    , buddy = require('koa-buddy')
    , router = require('koa-router')

app.use(buddy())

app.use(router(app))

/* posting application/json to /users
{
  "name": "John Doe"
}
*/
app.post('/users', function* (next) {
  console.log(this.request.body) // object { "name": "John Doe" }
  yield next
})

/* posting application/xml to /books
<?xml version="1.0"?>
<catalog>
   <book id="bk101">
      <author>Gambardella, Matthew</author>
      <title>XML Developer's Guide</title>
      <genre>Computer</genre>
      <price>44.95</price>
      <publish_date>2000-10-01</publish_date>
      <description>An in-depth look at creating applications
      with XML.</description>
   </book>
</catalog>
*/
app.post('/books', function* (next) {
  console.log(this.request.body)
  /* object:
  { declaration: { attributes: { version: '1.0' } },
    root:
     { name: 'catalog',
       attributes: {},
       children: [ [Object] ],
       content: '' } }
  */
  yield next
})

```

Supported methods: `PATCH`, `POST`, `PUT`, and `TRACE`.

Supported `Content-Type`:

- `application/xml`
- `application/json`
- `application/x-www-form-urlencoded`
- `text/*` *(treated as **plain text**)*
- `multipart` *(untested)*

If `Content-Type` is not supported, `koa-buddy` passes request stream buffer to `this.request.body`.

# Todo

- examples
- tests

# Contributors

- [Chris Yip](http://github.com/chrisyip/koa-buddy/commits/master?author=chrisyip)

[node-image]: http://img.shields.io/node/v/koa-buddy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-buddy
[npm-image]: http://img.shields.io/npm/v/koa-buddy.svg?style=flat-square
[daviddm-url]: https://david-dm.org/chrisyip/koa-buddy
[daviddm-image]: http://img.shields.io/david/chrisyip/koa-buddy.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisyip/koa-buddy
[travis-image]: http://img.shields.io/travis/chrisyip/koa-buddy.svg?style=flat-square
