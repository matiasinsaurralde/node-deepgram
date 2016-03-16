# deepgram

[![Wercker][wercker-image]][wercker-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
[![MIT License][license-image]][license-url]

From the [YC post](http://blog.ycombinator.com/deepgram-yc-w16-is-building-a-google-for-audio):

> **DeepGram is a company launching out of our Winter 2016 class that uses deep learning to index audio and make it searchable for businesses. For example, a company can use DeepGram to analyze their phone support audio dataset and search for moments where their competitors' names are mentioned.**

This project provides a simple NodeJS wrapper for the Deepgram API, it's built on top of [frisbee](https://github.com/niftylettuce/frisbee).

This is a very early version, I hope to implement more functions & enhance the existing ones in the following weeks, PRs are welcome :smile:.

## Usage

There's a NPM package available:

```npm install --save deepgram```

Indexing an audio file is as easy as:

```
deepgram.indexContent( 'http://website.com/audio.mp3' ).then( data => {
  // you'll get the content ID here (inside data)
})
```

Examples available [here](https://github.com/matiasinsaurralde/node-deepgram/tree/master/examples).

## Development

The wrapper uses Babel. You may test the source using [mocha](https://mochajs.org/):

```npm test```

The above will compile the JS & run [mocha](https://mochajs.org/) with the [options in the file](https://github.com/matiasinsaurralde/node-deepgram/blob/master/test/mocha.opts).

## API Documentation

I found the API documentation [here](http://api.lexika.io/doc/).

When you signup on the website you'll see some ```curl``` samples as well.

## TODO

* It could be interesting to use this module directly from the browser.

## License

[MIT][license-url]

[wercker-image]: https://app.wercker.com/status/2179a5f7fbbfa2be251285bbda4ec173/s/master
[wercker-url]: https://app.wercker.com/project/bykey/2179a5f7fbbfa2be251285bbda4ec173
[npm-image]: http://img.shields.io/npm/v/deepgram.svg?style=flat
[npm-url]: https://npmjs.org/package/deepgram
[npm-downloads]: http://img.shields.io/npm/dm/deepgram.svg?style=flat
[license-url]: LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
