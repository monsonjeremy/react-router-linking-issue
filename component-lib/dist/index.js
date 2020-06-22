"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Comp = () => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: "/"
}, "Test Link");

var _default = Comp;
exports.default = _default;