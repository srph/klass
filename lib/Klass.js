var H_PROPS = ['statics', 'constants', 'constructor'];

function Klass(name, property) {
  // We'll bail and notify the developer
  // if the provided `property` is anything but an object
  if ( typeof property !== "object" ) {
    var err = 'The provided property <' + property + '> is not an object.';
    throw new Error(err);
  }

  // Our prototypal class
  function NewClass() { }
  // Class properties (putting `static`, `constructor` in exception)
  var instanceProperties = omit(property, H_PROPS);

  // Assign the provided constructor and instance properties
  NewClass.prototype.constructor = property.constructor;
  extend(NewClass.prototype, instanceProperties);
  extendConstant(NewClass.prototype, property.constants);
  // Assign statics
  extend(NewClass, property.statics);

  this[name] = NewClass;
  return NewClass;
}
