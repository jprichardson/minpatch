var clone = require('clone')

var ops = Object.freeze({
  add: '+',
  remove: '-',
  replace: 'R',
  move: 'M',
  copy: 'C',
  test: 'T'
})

var keys = Object.freeze({
  path: 'p',
  value: 'v',
  from: 'f'
})

var invertedOps = Object.freeze(invertObject(ops))
var invertedKeys = Object.freeze(invertObject(keys))

function pack (jsonDiff) {
  var diff = clone(jsonDiff)
  return diff.map(_packItem)
}

function unpack (packedJsonDiff) {
  var diff = clone(packedJsonDiff)
  return diff.map(_unpackItem)
}

function _packItem (item) {
  item.op = ops[item.op]
  Object.keys(item).forEach(function (key) {
    if (key in keys) {
      item[keys[key]] = item[key]
      delete item[key]
    }
  })
  return item
}

function _unpackItem (item) {
  item.op = invertedOps[item.op]
  Object.keys(item).forEach(function (key) {
    if (key in invertedKeys) {
      item[invertedKeys[key]] = item[key]
      delete item[key]
    }
  })
  return item
}

function invertObject (obj) {
  var inverted = {}
  Object.keys(obj).forEach(function (key) {
    inverted[obj[key]] = key
  })
  return inverted
}

module.exports = {
  pack: pack,
  unpack: unpack
}
