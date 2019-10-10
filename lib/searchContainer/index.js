"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tinperBee = require("tinper-bee");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexView = function IndexView(props) {
  return _react2.default.createElement(
    "div",
    { className: "search" },
    props.data.map(function (item) {
      return _react2.default.createElement(
        _tinperBee.Col,
        {
          md: 3,
          className: {
            "split-line": item && item.props.splitLine,
            right: item && item.props.right
          }
        },
        item
      );
    })
  );
};

exports.default = IndexView;