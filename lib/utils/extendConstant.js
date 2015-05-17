/**
 * @params {Object} dest
 * @params {Object} source
 * @returns {void}
 */
function extendConstant(dst, src) {
  for ( key in Object.keys(src) ) {
    Object.defineProperty(dst, key, {
      value: src[key],
      writable: false,
      enumerable: true
    });
  }
}
