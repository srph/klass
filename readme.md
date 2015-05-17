# Klass
> Create ES5 JavaScript classes *declaratively*

It's painful when you have to write code that's not declarative enough. Well, that's how ES5 is. This library creates an abstraction so you can write classes like in most known OOP languages; no need to deal with prototype pains.

## Usage

```js
Klass({
  y: 5,

  constructor: function(x, z, z1) {
  	this.setX(x);
    this.z = z;
    this.z1 = z1;
  },

  setX: function(x) {
    this.x = x;
    return this;
  },

  getX: function() {
    return this.x;
  }
});
```