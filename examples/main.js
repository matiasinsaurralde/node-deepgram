require('dotenv').config()

/*

  if you're using Babel do:

  import Deepgram from 'deepgram'

*/

const Deepgram = require( '../lib/deepgram' ).default,
      deepgram = new Deepgram({ userId: process.env.DEEPGRAM_USER_ID })

deepgram.getBalance().then( balance => {
  console.log( '=> Balance', balance )
})


deepgram.indexContent( 'https://github.com/pixelate/soundcontrol/raw/master/assets/mp3/HelloWorld.mp3' ).then( contentID => {
  console.log( '=> Content ID:', contentID )
})

deepgram.getObjectStatus( '1458116761-3399221f-fb47-4717-bd5b-31f2a4d4c80f-6174788772' ).then( status => {
  console.log( '=> Object status', status )
})

deepgram.objectSearch({
  contentID: '1458116761-3399221f-fb47-4717-bd5b-31f2a4d4c80f-6174788772',
  query: 'hello',
  snippet: true  
}).then( search => {
  console.log( '=> Object Search:', search )
})

deepgram.getObjectTranscript('1458116570-d27af336-b738-4757-88ac-607e5eae970a-3584494445').then( transcript => {
  console.log( '=> Object transcript', transcript )
})
