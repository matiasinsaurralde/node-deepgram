var chai = require( 'chai' )
chai.should()

require('dotenv').config()

/* Remember to set process.env.DEEPGRAM_USER_ID before running the tests */

describe( 'Deepgram API', function() {
  const Deepgram = require( '../../lib/deepgram' ).default,
        deepgram = new Deepgram({ userId: process.env.DEEPGRAM_USER_ID })

  it( 'should check the balance', function( done ) {
    deepgram.getBalance().then( data => {
      var body = data.body
      body.should.be.an( 'object' )
      body.should.have.any.key( 'balance' )
      done()
    })
  })
})
