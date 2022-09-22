"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errorResponse = _interopRequireDefault(require("../utils/errorResponse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var errorHandler = function errorHandler(err, req, res, next) {
  var error = _objectSpread({}, err);

  error.message = err.message;
  cl('err: ', err); // Mongoose validation error

  if (err.name === 'SequelizeUniqueConstraintError') {
    var message = Object.values(err.errors).map(function (val) {
      return val.message ? val.message : val;
    });
    error = new _errorResponse["default"](message, 400);
  }

  return res.status(err.statusCode || 500).send({
    success: false,
    error: error.message || 'Server Error'
  });
};

var _default = errorHandler;
exports["default"] = _default;