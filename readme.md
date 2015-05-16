# Klass
> Create ES5 JavaScript classes declaratively

It's painful when you have to write code that's not declarative enough. Well, that's how JavaScript is. This library creates an abstraction so you can write classes like most known OOP languages, and as you think it is; no need to deal with prototype pains. It is easy, but it's not declarative.

## Usage

```js
Klass({
  y: 5,

  constructor: function(x) {
  	this.setX(x);
  },

  setX: function(x) {
    this.x = x;
    return this;
  }

  getX: function() {
    return this.x;
  }
})
```