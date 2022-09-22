"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.NODE_ENV = exports.DB_USER = exports.DB_PASSWORD = exports.DB_NAME = exports.DB_HOST = exports.API_URL = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Load env variables
_dotenv["default"].config({
  path: './.env'
});

var NODE_ENV = process.env.NODE_ENV || 'development';
exports.NODE_ENV = NODE_ENV;
var PORT = process.env.PORT || 5004;
exports.PORT = PORT;
var API_URL = process.env.API_URL || '';
exports.API_URL = API_URL;
var DB_HOST = process.env.DB_HOST || '';
exports.DB_HOST = DB_HOST;
var DB_USER = process.env.DB_USER || '';
exports.DB_USER = DB_USER;
var DB_PASSWORD = process.env.DB_PASSWORD || '';
exports.DB_PASSWORD = DB_PASSWORD;
var DB_NAME = process.env.DB_NAME || '';
exports.DB_NAME = DB_NAME;