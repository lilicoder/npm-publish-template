"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tinperBee = require("tinper-bee");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _tinperBee.Form.FormItem;

var IndexView = function IndexView(props) {
  return _react2.default.createElement(
    _tinperBee.Drawer,
    {
      className: "more-search",
      title: "\u9AD8\u7EA7\u641C\u7D22",
      placement: "right",
      show: true,
      onClose: function onClose() {}
    },
    _react2.default.createElement(
      _tinperBee.Form,
      null,
      _react2.default.createElement(
        FormItem,
        null,
        _react2.default.createElement(
          _tinperBee.Col,
          { md: 12 },
          _react2.default.createElement(
            _tinperBee.Label,
            null,
            "\u7528\u6237\u540D"
          ),
          _react2.default.createElement(_tinperBee.FormControl, { placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D(\u5305\u542B\u6570\u5B57\u548C\u5B57\u6BCD\uFF0C8-15\u4F4D)" })
        )
      ),
      _react2.default.createElement(
        FormItem,
        null,
        _react2.default.createElement(
          _tinperBee.Col,
          { md: 12 },
          _react2.default.createElement(
            _tinperBee.Label,
            null,
            "\u5BC6\u7801"
          ),
          _react2.default.createElement(_tinperBee.FormControl, { placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801", type: "password" })
        )
      ),
      _react2.default.createElement(
        FormItem,
        { style: { paddingLeft: "106px" } },
        _react2.default.createElement(
          _tinperBee.Button,
          {
            shape: "border",
            className: "reset",
            style: { marginRight: "8px" }
          },
          "\u53D6\u6D88"
        ),
        _react2.default.createElement(
          _tinperBee.Button,
          { colors: "primary", className: "login" },
          "\u6CE8\u518C"
        )
      )
    )
  );
};

exports.default = IndexView;