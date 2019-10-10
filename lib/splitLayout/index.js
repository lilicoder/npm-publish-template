"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tinperBee = require("tinper-bee");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexView = function IndexView(props) {
  return _react2.default.createElement(
    "div",
    { className: "split-layout" },
    _react2.default.createElement(
      _tinperBee.Row,
      { className: "top" },
      props.header
    ),
    _react2.default.createElement(
      _tinperBee.Row,
      { className: "bottom" },
      props.content
    )
  );
};
IndexView.propTypes = {
  content: _propTypes2.default.Component | _propTypes2.default.array,
  header: _propTypes2.default.Component | _propTypes2.default.array,
  footer: _propTypes2.default.Component | _propTypes2.default.array
};
IndexView.defaultProps = {
  // content: [],
  // header: [],
  // footer: []
};

exports.default = IndexView;