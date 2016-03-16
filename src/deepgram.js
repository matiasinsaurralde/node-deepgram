import 'isomorphic-fetch'
import Frisbee from 'frisbee'

const methods = [
  'get_balance',
  'index_content',
  'get_object_status',
  'object_search',
  'get_object_transcript'
]


export default class Deepgram {
  constructor( opts ) {
    this.opts = opts || {}
    this.api = new Frisbee({
      baseURI: 'https://api.deepgram.com',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

/*
curl -H "Content-Type: application/json" -X POST -d '{ "action": "get_balance", "userID": "1458103900-1210f433-510f-4ea4-bbda-9b2e3fe28865-9829960392053284048220562727614" }' api.deepgram.com 
*/

  getBalance() {
    console.log( 'get balance?', { action: 'get_balance', userID: this.opts.userId } )
    this.api.post( '/', { action: 'get_balance', userID: this.opts.userId } ).then( data => {
    }).catch( function(err) {
console.log('err',err)
    })
  }
}
