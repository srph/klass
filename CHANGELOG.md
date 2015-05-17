# Changelog

### v0.2.2
- Fixed adding constants causing to throw `Property description must be an object: y`.

### v0.2.1
- Added custom root (in which the created class would be hoisted / added to).
```js
// In most cases, this would be added to `window`.
Klass({ _displayName: 'MyClass', ... });

// But what if we didn't want it to be added to `window` / global object?
// For example, given that it's not part of the public API of a library.
Klass({ _displayName: 'MyClass', ... }, {});
```

### v0.2.0
- The library has a new API. Removed `_displayName` in favor of `name` as the first argument.
  Old:
  ```
  Klass({ _displayName: 'MyClass', ... });
  ```

  New:
  ```ks
  Klass('MyClass', { .. });
  ```
- Added constants.

### v0.1.0

- Initial Release
