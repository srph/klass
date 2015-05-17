# Klass
> Create ES5 JavaScript classes *declaratively*

It's painful when you have to write code that's not declarative enough. Well, that's how ES5 is. This library creates an abstraction so you can write classes like in most known OOP languages; no need to deal with prototype pains.

This is, nothing more or less, a proof of concept.

## What, Why, How?

We want to create a class named `SessionManager`, an abstraction above a native (or whatevah) session implementaton.

```js
/**
 * @param {Session} session Session implementation
 */
function SessionManager(options) {
  // this.options ....
}

SessionManager.prototype.bag = [];
SessionManager.prototype.put = function(k, v) { /* .. */ }
SessionManager.prototype.get = function(k) { /* .. */ }
SessionManager.prototype.forget = function(k) { /* .. */ }
SessionManager.prototype.clear = function() { /* .. */ }

var session = new SessionManager(..);
```

But, I think, this is a little more declarative and close to the ES6 syntax:

```js
Klass({
  _displayName: 'SessionManager',

  bag: [],

  constructor: function(options) {
  	// ...
  },

  put: function(k, v) { },
  get: function(k) { },
  forget: function(k) { },
  clear: function() { },
});

var session = new SessionManager(..);
```

## What about constants and statics?

Well, they're here, too!

```
Klass('SomeClass', {
  constants: {
    API_PUB_KEY: '...',
    API_SECRET_KEY: '..'
  },

  statics: {
    fn: function() { /* .. */ }
  }
});
```
