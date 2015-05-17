# Changelog

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
