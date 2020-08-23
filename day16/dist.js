"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _components = _interopRequireWildcard(require("./components"));

var Person = /*#__PURE__*/function () {
  function Person() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      name: '无名氏',
      age: 20
    };
    (0, _classCallCheck2["default"])(this, Person);
    var name = props.name,
        age = props.age;
    this.name = name;
    this.age = age;
  }

  (0, _createClass2["default"])(Person, [{
    key: "say",
    value: function say() {
      console.log(this.name, this.age);
    }
  }]);
  return Person;
}();

(0, _components.aaa)();
(0, _components.bbb)();
var nickName = _components["default"].nickName,
    girlFriends = _components["default"].girlFriends;
console.log(nickName, girlFriends);

_components.animal.say(); // console.log();//报错 是因为 node中不支持 es6的模块化
// console.log(bbb());


console.log(_components.a);
new Promise(function (resolve) {});

function abc() {
  return _abc.apply(this, arguments);
}

function _abc() {
  _abc = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {});

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _abc.apply(this, arguments);
}

new Person({
  name: '小洸',
  age: 20
}).say();
