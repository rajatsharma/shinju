'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Shinju() {
  var defaultTree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var tree = defaultTree;
  var listeners = [];

  function subscribe(fn) {
    listeners.push(fn);
    return function () {
      listeners = listeners.filter(function (l) {
        return l !== fn;
      });
    };
  }

  function add(item, itemLens) {
    var _extends2;

    listeners.map(function (x) {
      return x();
    });
    tree = _extends({}, tree, (_extends2 = {}, _extends2[itemLens] = item, _extends2));
  }

  function getTree() {
    return tree;
  }

  function addChain(item, itemLens) {
    var _extends3;

    return Shinju(_extends({}, tree, (_extends3 = {}, _extends3[itemLens] = item, _extends3)));
  }

  function get(i) {
    return tree[i];
  }

  return { add: add, getTree: getTree, addChain: addChain, get: get, subscribe: subscribe };
}

module.exports = Shinju;
