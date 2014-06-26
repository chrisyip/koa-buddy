# koa-buddy

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
