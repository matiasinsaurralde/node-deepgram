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
    return new Promise( (resolve, reject) => {
      this.api.post( '/', this._authenticatedPayload( payload) )
        .then( (data) => resolve(data.body.contentID) )
        .catch( (err) => reject(err) )
    })
  }

  getBalance() {
    var payload = { action: 'get_balance' }
    return new Promise( (resolve, reject) => {
      this.api.post( '/', this._authenticatedPayload( payload) )
        .then( (data) => resolve(data.body.balance) )
        .catch( (err) => reject(err) )
    })
  }

  getObjectStatus( contentID ) {
    var payload = { action: 'get_object_status', contentID: contentID }
    return new Promise( (resolve, reject) => {
      this.api.post( '/', this._authenticatedPayload( payload) )
        .then( (data) => resolve(data.body.status) )
        .catch( (err) => reject(err) )
    })
  }

  getObjectTranscript( contentID ) {
    var payload = { action: 'get_object_transcript', contentID: contentID }
    return new Promise( (resolve, reject) => {
      this.api.post( '/', this._authenticatedPayload( payload) )
        .then( (data) => resolve(data.body) )
        .catch( (err) => reject(err) )
    })
  }

  objectSearch( query ) {
    var payload = query || { }
    payload.action = 'object_search'

    return new Promise( (resolve, reject) => {
      this.api.post( '/', this._authenticatedPayload( payload) )
        .then( (data) => resolve(data.body) )
        .catch( (err) => reject(err) )
    })
  }

  _authenticatedPayload( object ) {
    var wrapper = {}
    object.userID = this.opts.userId
    wrapper.body = JSON.stringify( object )
    return wrapper
  }
}
