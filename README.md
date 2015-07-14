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

API
---

License
-------

MIT

Copyright 2015 [JP Richardson](https://github.com/jprichardson)


