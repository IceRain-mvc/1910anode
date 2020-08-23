"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Person1 = /*#__PURE__*/function () {
  function Person1() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      name: '无名氏',
      age: 20
    };
    (0, _classCallCheck2["default"])(this, Person1);
    var name = props.name,
        age = props.age;
    this.name = name;
    this.age = age;
  }

  (0, _createClass2["default"])(Person1, [{
    key: "say",
    value: function say() {
      console.log(this.name, this.age);
    }
  }]);
  return Person1;
}();

new Person1({
  name: '小洸',
  age: 20
}).say();
