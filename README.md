#  dom-observer [![Build Status](https://secure.travis-ci.org/jide/dom-observer.png?branch=master)](https://travis-ci.org/jide/dom-observer)

[![SauceLabs Status](https://saucelabs.com/browser-matrix/empty.svg)](https://saucelabs.com/u/empty)

Observe DOM changes

## Getting Started

### Install

```
$ npm install dom-observer
```

### Usage

#### import module via browserify

```javascript
var aModule = require('dom-observer');

// by default, the generator scaffold a function as default module implementation
aModule();
```

#### import the old school style

just import the `lib/index.js` script

### Example

Install and build the example

```
npm run build-example
```

Open example/index.html in your favorite browser

### Test module

Build tests with

```
npm run build-test
```

Then open `test/index.html` to run the tests.

Test module on saucelabs with mocha

```
npm test
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
