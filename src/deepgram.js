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
  }
  getBalance() {
    console.log( 'get balance?' )
  }
}
