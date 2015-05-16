function Klass(property) {
  // We'll bail and notify the developer
  // if the provided `property` is anything but an object
  if ( typeof property !== "object" ) {
    var err = 'The provided property <' + property + '> is not an object.'
    throw new Error(err);
  }

  // Our prototypal class
  var _class = function NewClass() { }
  // Class properties (putting `static`, `constructor`, `_displayName` in exception)
  var instanceProperties = omit(property, ['statics', 'constructor', '_displayName']);
  
  // Assign the provided constructor and instance properties
  _class.prototype.constructor = property.constructor;
  extend(_class.prototype, instanceProperties);
  // Assign statics
  extend(_class, statics);

  this[property._displayName] = _class;
  return NewClass
}