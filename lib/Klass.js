var H_PROPS = ['statics', 'constructor', '_displayName'];

function Klass(property) {
  // We'll bail and notify the developer
  // if the provided `property` is anything but an object
  if ( typeof property !== "object" ) {
    var err = 'The provided property <' + property + '> is not an object.';
    throw new Error(err);
  }

  // Our prototypal class
  function NewClass() { }
  // Class properties (putting `static`, `constructor`, `_displayName` in exception)
  var instanceProperties = omit(property, H_PROPS);
  
  // Assign the provided constructor and instance properties
  NewClass.prototype.constructor = property.constructor;
  extend(NewClass.prototype, instanceProperties);
  // Assign statics
  extend(NewClass, property.statics);

  this[property._displayName] = NewClass;
  return NewClass;
}