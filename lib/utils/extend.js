/**
 * @params {obj} dst
 * @returns {obj}
 */
function extend(dst, src) {
  for ( key in Object.keys(src) ) {
    dst[key] = source[key];
  }

  return dst;
}
