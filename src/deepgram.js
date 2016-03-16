import 'isomorphic-fetch'
import Frisbee from 'frisbee'

export default class Deepgram {
  constructor( opts ) {
    this.opts = opts || {}
    this.api = new Frisbee({
      baseURI: 'http://api.deepgram.com',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  indexContent( dataUrl ) {
    var payload = { action: 'index_content', data_url: dataUrl }
    return this.api.post( '/', this._authenticatedPayload( payload ) )
  }

  getBalance() {
    var payload = { action: 'get_balance' }
    return this.api.post( '/', this._authenticatedPayload( payload ) )
  }

  getObjectStatus( contentID ) {
    var payload = { action: 'get_object_status', contentID: contentID }
    return this.api.post( '/', this._authenticatedPayload( payload ) )
  }

  getObjectTranscript( contentID ) {
    var payload = { action: 'get_object_transcript', contentID: contentID }
    return this.api.post( '/', this._authenticatedPayload( payload ) )
  }

  objectSearch( query ) {
    console.log( 'objectsearch', query )

    var payload = query || { }
    payload.action = 'object_search'

    return this.api.post( '/', this._authenticatedPayload( payload ) )
  }

  _authenticatedPayload( object ) {
    var wrapper = {}
    object.userID = this.opts.userId
    wrapper.body = JSON.stringify( object )
    return wrapper
  }
}
