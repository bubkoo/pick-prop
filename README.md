# pick-prop

> Randomly sampling a property from an object.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/pick-prop/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/pick-prop/master.svg?style=flat-square)](https://travis-ci.org/mock-end/pick-prop)
[![coverage:?](https://img.shields.io/coveralls/mock-end/pick-prop/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/pick-prop)



## Install

```
$ npm install --save pick-prop 
```



## Usage

> For more use-cases see the [tests](https://github.com/mock-end/pick-prop/blob/master/test/spec/index.js)

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

- [pick-props](https://github.com/mock-end/pick-props) - Randomly sampling some properties from an object.
- [pick-key](https://github.com/mock-end/pick-key) - Randomly sampling a key from an object.
- [pick-keys](https://github.com/mock-end/pick-keys) - Randomly sampling some keys from an object.
- [object-at](https://github.com/gearcase/object-at) - Get object's property according to the path.
- [object-has](https://github.com/gearcase/object-has) - Checks if path is a direct property of object.
- [object-set](https://github.com/gearcase/object-set) - Sets the value at path of object.
- [object-unset](https://github.com/gearcase/object-unset) - Removes the property at path of object.
- [to-path](https://github.com/gearcase/to-path) - Converts string to a property path array. 


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/pick-prop/issues/new).

