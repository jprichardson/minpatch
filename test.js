var assert = require('assert')
var minpatch = require('./')
var fixtures = require('./fixtures')

/* global describe it */

describe('minpatch', function () {
  fixtures.valid.forEach(function (f) {
    describe('pack() - ' + f.description, function () {
      it('should pack', function () {
        var packed = minpatch.pack(f.unpacked)
        assert.deepEqual(packed, f.packed)
      })
    })

    describe('unpack() - ' + f.description, function () {
      it('should unpack', function () {
        var unpacked = minpatch.unpack(f.packed)
        assert.deepEqual(unpacked, f.unpacked)
      })
    })
  })
})
