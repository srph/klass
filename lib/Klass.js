function Klass(name, property, root) {
  // We'll bail and notify the developer
  // if the provided `property` is anything but an object
  if ( typeof property !== "object" ) {
    var err = 'The provided property <' + property + '> is not an object.';
    throw new Error(err);
  }

  // Our prototypal class
  function NewClass() { }
  // Class properties (putting `static`, `constructor` in exception)
  var instanceProperties = omit(property, ['statics', 'constants', 'constructor']);

  // Assign the provided constructor and instance properties
  NewClass.prototype.constructor = property.constructor;
  extend(NewClass.prototype, instanceProperties);
  extendConstant(NewClass.prototype, property.constants);
  // Assign statics
  extend(NewClass, property.statics);

  (root || this)[name] = NewClass;
  return NewClass;
}
