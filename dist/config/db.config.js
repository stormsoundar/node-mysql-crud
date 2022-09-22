"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("../loaders/config.js");

var dbConfig = {
  HOST: _config.DB_HOST,
  USER: _config.DB_USER,
  PASSWORD: _config.DB_PASSWORD,
  DB_NAME: _config.DB_NAME,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
var _default = dbConfig;
exports["default"] = _default;