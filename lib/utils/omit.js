function omit(obj, property) {
  // New object with the omitted property
  var _obj = {};

  if ( Array.isArray(property) ) {
    for ( var i = 0; i < property.length; i++ ) {
      _obj = omit(obj, property)
    }
  } else {
    var keys = Object.keys(obj);

    for ( key in keys ) {
      if ( Object.hasOwnProperty(obj, key) && key !== property ) {
        _obj[key] = obj[key];
      }
    }
  }

  return _obj;
}
