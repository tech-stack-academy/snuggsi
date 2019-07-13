console.warn ('loading test helper')

const
  test = require ('tape')

// test.onFinish (process.exit)

const
  // TODO: migrate to ./index
  sleep = time =>
    new Promise (alarm => setTimeout (alarm, time))

const
  zip = ( tokens, result = '' ) =>
    [
      (result, fragment) => result
        += `${ fragment }${ tokens.shift `` || `` }`
    , result
    ]


class Test {

  constructor (fragments, ...tokens) {
    let name = [ ]
    //.flat   ( ) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
      .concat ( fragments )
      .reduce ( ... zip (tokens) )

    return group => {
      return test (name, new Case (group))
    }
  }
}


class Case {

  constructor (definition) {
    let
      result

    return (this.case)
  }


  async 'case' (t) {
      let { assert } = t
      let assertions = []

      t.end ``

        return assertion
      }

      typeof definition === 'function'
        ? await definition ( assertion )
        : assertion ( definition )

      console.warn ('Plan', t.plan)
  //  t.plan ( assertions.length ) // prevents t.end calls
  //    : queue (definition)

      assertions.push (t.end)

      for ( let operation of assertions )
        operation ``
    }
  }
}


module.exports =
    ( ... params ) =>
      ( callback ) =>
        new Test ( ... params ) ( callback )

void {
// See chunked responses
// http://taylor.fausak.me/2013/02/17/testing-a-node-js-http-server-with-mocha/
//, get    : require ('http')
//, browse : require ('./browse')
}
