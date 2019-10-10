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

  return _react2.default.createElement(
    "div",
    { className: "tile-container" },
    _react2.default.createElement(
      "div",
      { className: "tile-contain" },
      data.map(function (item, index) {
        return _react2.default.createElement(
          "div",
          { className: "tile-box" },
          item.type == "new" ? _react2.default.createElement(
            _tinperBee.Tile,
            { key: index, className: "tile" },
            _react2.default.createElement(
              "div",
              { className: "add-circle", onClick: function onClick() {
                  return item.newFn();
                } },
              "+"
            ),
            _react2.default.createElement(
              "div",
              { className: "new", onClick: function onClick() {
                  return item.newFn();
                } },
              "\u65B0\u5EFA",
              item.name
            )
          ) : _react2.default.createElement(
            _tinperBee.Tile,
            { key: index, className: "tile" },
            _react2.default.createElement(
              "div",
              { className: "icon" },
              _react2.default.createElement(_tinperBee.Icon, { type: "uf-mac" })
            ),
            _react2.default.createElement(
              "div",
              { className: "name" },
              item.name
            ),
            _react2.default.createElement(
              "div",
              { className: "description" },
              item.description,
              _react2.default.createElement(
                "div",
                { className: "opration" },
                _react2.default.createElement(_tinperBee.Icon, {
                  type: "uf-pencil-s",
                  onClick: function onClick() {
                    return item.editFn && item.editFn(item);
                  }
                }),
                _react2.default.createElement(_tinperBee.Icon, {
                  type: "uf-del",
                  onClick: function onClick() {
                    return item.deleteFn && item.deleteFn(item);
                  }
                })
              )
            )
          )
        );
      })
    )
  );
};

exports.default = IndexView;