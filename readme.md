# Klass
> Create ES5 JavaScript classes *declaratively*

It's painful when you have to write code that's not declarative enough. Well, that's how ES5 is. This library creates an abstraction so you can write classes like in most known OOP languages; no need to deal with prototype pains.

This is, nothing more or less, a proof of concept; also a *work in progress*.

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

But, I think, this is a little more declarative and closer to the ES6 syntax:

```js
Klass('SessionManager', {
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

```js
Klass('SomeClass', {
  constants: {
    API_PUB_KEY: '...',
    API_SECRET_KEY: '..'
  },

  statics: {
    fn: function() { /* .. */ }
  }
});

var some = new SomeClass(..);
console.log(typeof SomeClass.fn) // => "function"
console.log(typeof some.fn) // => "undefined"
some.API_PUB_KEY = 'whatever';
console.log(some.API_PUB_KEY); // => "..."
```

# But.. wait, where do you hoist the classes?

They are automatically added to the `this` context (normally, `window`). However, you can set it yourself.
```js
Klass('SomeClass', {
  ..
}, someObj);
```

It's a good practice to set the root to `window` in cases when the class is a public API.
```js
Klass('SomeClass', {
  ..
}, window);
```

Or if you would prefer not to hoist the class:
```js
var SomeKlass = Klass('SomeClass', {
  ..
}, {});
```
