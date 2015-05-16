/**
 * @param {obj} dst
 * @return {obj}
 */
function extend(dst) {
  for ( var i = 1; i < arguments.length; i++ ) {
    var source = arguments[i];
    var keys = Object.keys(source);

    for ( key in keys ) {
      dst[key] = source[key];
    }
  }

  return dst;
}
