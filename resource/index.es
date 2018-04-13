const
  entry = 'index.es'
, root  = process.cwd ``

, Base = path =>
    !! path
      ? require (`${root}${path}${entry}`)
      : class { }

, filesystem
   = require ('fs')

, stat
    = require ('util')
      .promisify (filesystem.stat)

, DEFAULT_METHODS
    = [ 'GET', 'HEAD' ]

, SAFE_METHODS
    = [ ... DEFAULT_METHODS ]

, METHODS
    = [ ... require ('http').METHODS ]
      // for some reason connect won't work
      .filter (method => method !== 'TRACE')
      .filter (method => method !== 'CONNECT')
      .filter (method => method !== 'OPTIONS') // cors?

, DEFAULT_METHODS
    = [ 'GET', 'HEAD' ]

, SAFE_METHODS
    = [ ... DEFAULT_METHODS ]

, UNSAFE_METHODS
    = METHODS.filter
      (method => !!! SAFE_METHODS.includes (method))

, filter = resource =>
    METHODS.filter
      (method => resource [method.toLowerCase ()])

, Base = path =>
    !!! console.warn ('path', path)

    Boolean ( path + '')
      ? require (`${root}${path}index.es`)
      : class { }


module.exports = path =>

new class extends Base (path) {

  constructor (allow = filter (super ()), headers = { allow }) {

    for (let method of UNSAFE_METHODS)
      allow.includes (method) ||

      Object.defineProperty (this, method.toLowerCase (), {
        enumerable: true,
        value (context) { context.throw (405,  { headers }) }
      })
  }

  head (context)
    { context.status = 200 }

  async get (context, identity) {

    ( super.get || ( _ => _ ) )
    ( context, identity )

    context.body
      // test path security
      // `..` or even worse `/`
      // What about paths with special characters?
      || await send (context, root + path + identity)
  }

//options (context)
//  // should be done by CORS
//  { context.status = 200 }

//purge (context)
//  // http://restcookbook.com/Basics/caching/
//  { context.status = 202 }
}

function mount (point) { }

// Inded overflow https://github.com/koajs/send/pull/99/files
async function send (context, file) {

  // piped streamed responses
  // https://github.com/koajs/koa/issues/944
  // https://github.com/claudetech/koa-stream
  // https://github.com/pillarjs/send/blob/master/test/send.js#L22-L24
  // HTTP Range Requests - https://tools.ietf.org/html/rfc7233

    const
      { size, mtime } = await stat (file)


    context.body = read (file)
    context.type = file.split `.`.pop ``
    context.set  ( 'content-length', size )
    context.set  ( 'last-modified' , mtime.toUTCString `` )
}
