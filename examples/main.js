require('dotenv').config()

const Deepgram = require( '../lib/deepgram' ).default,
      deepgram = new Deepgram({ userId: process.env.DEEPGRAM_USER_ID })

deepgram.getBalance().then( data => {
  console.log( '=> Balance', data.body.balance )
})

deepgram.objectSearch({
  contentID: '1458104273-e1f1c852-a21a-4963-82a1-590e5ac49481-2311040912',
  query: 'social epistemology',
  snippet: true  
}).then( data => {
  console.log( '=> Object Search Results', data.body )
})

deepgram.getObjectTranscript('1458104273-e1f1c852-a21a-4963-82a1-590e5ac49481-2311040912').then( data => {
  console.log( '=> Object transcript', data.body )
})
