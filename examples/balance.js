const Deepgram = require( '../lib/deepgram' ).default,
      deepgram = new Deepgram({ userId: 'xxx' })

deepgram.getBalance( function( err, res ) {
  console.log(1,err,res)
})
