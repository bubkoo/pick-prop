# pick-prop

> Randomly sampling a property from an object.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/pick-prop/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/pick-prop/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/pick-prop)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/pick-prop/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/pick-prop)



## Install

```
$ npm install --save pick-prop 
```



## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/pick-prop/blob/master/test/spec/index.js)

```js
var pickProp = require('pick-prop');

// pickProp(object);

pickProp({ a: 1, b: 2, c: 3 }); // => 3
pickProp([2]);                  // => 2

pickProp();     // => undefined
pickProp(null); // => undefined
pickProp([]);   // => undefined
pickProp({});   // => undefined
pickProp(1);    // => undefined
pickProp('a');  // => undefined
```

## Related

- [pick-props](https://github.com/bubkoo/pick-props) - Randomly sampling some properties from an object.
- [pick-key](https://github.com/bubkoo/pick-key) - Randomly sampling a key from an object.
- [pick-keys](https://github.com/bubkoo/pick-keys) - Randomly sampling some keys from an object.
- [object-at](https://github.com/bubkoo/object-at) - Get object's property according to the path.
- [object-has](https://github.com/bubkoo/object-has) - Checks if path is a direct property of object.
- [object-set](https://github.com/bubkoo/object-set) - Sets the value at path of object.
- [object-unset](https://github.com/bubkoo/object-unset) - Removes the property at path of object.
- [to-path](https://github.com/bubkoo/to-path) - Converts string to a property path array. 


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/pick-prop/issues/new).

