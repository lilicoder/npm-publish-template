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
  var data = props.data;

  function getColor(num) {
    return "#ed3d34";
  }
  return _react2.default.createElement(
    "div",
    { className: "warn-container" },
    _react2.default.createElement(
      "div",
      { className: "warn-contain" },
      data.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { className: "warn-box" },
          _react2.default.createElement(
            _tinperBee.Tile,
            { key: index, className: "warn" },
            _react2.default.createElement(
              "div",
              { className: "name" },
              item.name,
              _react2.default.createElement(_tinperBee.Icon, {
                type: "uf-exc-c-2",
                style: { color: item.isAlarm && getColor(item.alarmColor) }
              })
            ),
            _react2.default.createElement(
              "div",
              {
                className: "num",
                style: { color: item.isAlarm && getColor(item.alarmColor) }
              },
              item.actValue,
              _react2.default.createElement(
                "span",
                null,
                item.unit
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "time" },
              item.createTime
            ),
            _react2.default.createElement(
              "div",
              { className: "opration" },
              _react2.default.createElement(
                "div",
                {
                  className: "btn",
                  onClick: function onClick() {
                    return item.detailFn && item.detailFn(item);
                  }
                },
                _react2.default.createElement(
                  "span",
                  null,
                  "\u8BE6\u60C5"
                )
              ),
              _react2.default.createElement(
                "div",
                {
                  className: item.isConfirm || !item.isAlarm ? "disabled btn" : "btn",
                  onClick: function onClick() {
                    return !item.isConfirm && item.isAlarm && item.confirmFn && item.confirmFn(item);
                  }
                },
                _react2.default.createElement(
                  "span",
                  null,
                  "\u786E\u8BA4"
                )
              )
            )
          )
        );
      })
    )
  );
};

exports.default = IndexView;