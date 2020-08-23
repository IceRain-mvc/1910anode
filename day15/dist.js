"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var a = function a() {
  console.log('a');
};

var b = 10;

var Person = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "say",
    value: function say() {}
  }]);

  return Person;
}();
"use strict";

require('@babel/polyfill');

var a = 10;
var arr = [1, 2, 3, 4];
arr.findIndex(function (item) {
  return item === 3;
});
console.log(arr.reduce(function (pre, next) {
  return pre + next;
}));
console.log(arr.reduce(function (pre, next) {
  return pre + next;
}));
console.log(arr.reduce(function (pre, next) {
  return pre + next;
}));
