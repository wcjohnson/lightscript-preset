"use strict";

var _isMatch2 = _interopRequireDefault(require("@lightscript/runtime/isMatch"));

var _hasProps2 = _interopRequireDefault(require("@lightscript/runtime/hasProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((0, _isMatch2.default)(a, x)) {
  b;
} else if ((0, _isMatch2.default)(f, x) && (0, _hasProps2.default)(x, "g")) {
  var _x = x,
      g = _x.g;
  h;
}

var i = function (_it) {
  if ((0, _isMatch2.default)(a, _it)) {
    return b;
  } else if ((0, _isMatch2.default)(f, _it) && (0, _hasProps2.default)(_it, "g")) {
    var _g = _it.g;
    return h;
  }
}(x);