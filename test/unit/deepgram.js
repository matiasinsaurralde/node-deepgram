var chai = require( 'chai' )
chai.should()

require('dotenv').config()

/* Remember to set process.env.DEEPGRAM_USER_ID before running the tests */

describe( 'Deepgram API', function() {
  const Deepgram = require( '../../lib/deepgram' ).default,
        deepgram = new Deepgram({ userId: process.env.DEEPGRAM_USER_ID })

  var testContentId = '1458116570-d27af336-b738-4757-88ac-607e5eae970a-3584494445',
      testContentUrl = 'https://github.com/pixelate/soundcontrol/raw/master/assets/mp3/HelloWorld.mp3',
      testContentQuery = 'hello'

  it( 'should check the balance', function( done ) {
    deepgram.getBalance().then( balance => {
      balance.should.be.a( 'number' )
      done()
    })
  })

  it( 'should index content', (done) => {
    deepgram.indexContent( testContentUrl ).then( contentID => {
      contentID.should.be.a( 'string' )
      done()
    })
  })

  it( 'should get the object status', (done) => {
    deepgram.getObjectStatus( testContentId ).then( status => {
      status.should.be.a( 'string' )
      done()
    })
  })

  it( 'should get the transcript', (done) => {
    deepgram.getObjectTranscript( testContentId ).then( transcript => {
      transcript.should.be.a( 'object' )
      done()
    })
  }) 

  it( 'should search objects', (done) => {
    deepgram.objectSearch({
      contentID: testContentId,
      query: testContentQuery,
      snippet: true
    }).then( search => {
      search.should.have.any.key( 'snippet' )
      search.should.have.any.key( 'startTime' )
      search.should.have.any.key( 'endTime' )
      done()
    })
  })

})
