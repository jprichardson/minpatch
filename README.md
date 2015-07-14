minpatch
========

Reduces [JSON patches](http://jsonpatch.com/)/[RFC 6902](http://tools.ietf.org/html/rfc6902)
to to be less verbose. Saves you precious bytes.


### JSON Patch?

JSON patch is a standard RFC 6902 to describe changes (diffs) in JSON documents.

Implementations:

- https://github.com/Starcounter-Jack/JSON-Patch
- https://github.com/cujojs/jiff
- https://github.com/JSON8/patch


### Why use `minpatch`?

You'd use this module if you were storing your JSON patches in a database.


Install
-------

    npm i --save minpatch


Example
-------

```js
var assert = require('assert')
var minpatch = require('minpatch')

// these patches would be the output from whichever JSON patch package
// you choose.
var patches = [
  {"op": "add", "path": "/biscuits/1", "value": {"name": "Ginger Nut"}},
  {"op": "remove", "path": "/biscuits"},
  {"op": "replace", "path": "/biscuits/0/name", "value": "Chocolate Digestive"},
  {"op": "copy", "from": "/biscuits/0", "path": "/best_biscuit"},
  {"op": "move", "from": "/biscuits", "path": "/cookies"},
  {"op": "test", "path": "/best_biscuit/name", "value": "Choco Liebniz"}
]

var packed = minpatch.pack(patches)
console.dir(packed)
/* =>
  [
    {"op": "+", "p": "/biscuits/1", "v": {"name": "Ginger Nut"}},
    {"op": "-", "p": "/biscuits"},
    {"op": "R", "p": "/biscuits/0/name", "v": "Chocolate Digestive"},
    {"op": "C", "f": "/biscuits/0", "p": "/best_biscuit"},
    {"op": "M", "f": "/biscuits", "p": "/cookies"},
    {"op": "T", "p": "/best_biscuit/name", "v": "Choco Liebniz"}
  ]
*/

var unpacked = minpatch.unpack(packed)
assert.deepEqual(patches, unpacked) // is true
```

API
---

### pack(jsonPatchArray)

Pack a JSON Patch array. Will not mutate input object.

### unpack(packedJsonPatchArray)

Unpack a packed JSON Patch array. Will not mutate input object.



License
-------

MIT

Copyright 2015 [JP Richardson](https://github.com/jprichardson)


