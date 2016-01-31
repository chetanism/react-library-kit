'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloWorld = function HelloWorld(_ref) {
  var _ref$name = _ref.name;
  var name = _ref$name === undefined ? 'World' : _ref$name;
  return _react2.default.createElement(
    'h3',
    null,
    'Hello, ',
    name,
    '!'
  );
}; /**
    * Created by chetanv on 31/01/16.
    */

exports.default = HelloWorld;