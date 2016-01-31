'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const HelloWorld = ({name = 'World'}) => (<h3>Hello, {name}!</h3>);

var HelloWorld = function (_Component) {
  (0, _inherits3.default)(HelloWorld, _Component);

  function HelloWorld() {
    (0, _classCallCheck3.default)(this, HelloWorld);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HelloWorld).apply(this, arguments));
  }

  (0, _createClass3.default)(HelloWorld, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h3',
        null,
        'Hello, ',
        this.props.name
      );
    }
  }]);
  return HelloWorld;
}(_react.Component); /**
                      * Created by chetanv on 31/01/16.
                      */

;

exports.default = HelloWorld;