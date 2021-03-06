# snuggsi.Server

_snuggsi ツ Server - Feel right at `$HOME`_


## Features

  -  Automatic transpilation and bundling (with webpack and babel)
  -  Hot code reloading
  -  Static file serving. ./ & ./static/ is mapped to /
  -  Custom layouts with the layouts/ directory
  -  Middleware
  -  Code splitting for every pages/


## Media MIME Types

  - MDN Properly COnfiguring Server MIME Types - https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types
  - Brendan Eich / Douglas Crockford discussion on application/ecmascript - https://mail.mozilla.org/pipermail/es-discuss/2011-August/016267.html

## .mount

Mount resource

```javascript
const
  { Server }
    = require ('snuggsi')

(new Server).serve  ``
  .mount ( 'foo', resource `bar` )
```

## .serve

Serve a specified directory as root

```javascript
const
  { Server }
    = require ('snuggsi')

(new Server).serve  `path/to/static/assets`
```

### References

  - Next - https://github.com/zeit/next.js
  - Nuxt - https://github.com/nuxt/nuxt.js

