"use strict";

var _express = _interopRequireDefault(require("express"));

var _chalk = _interopRequireDefault(require("chalk"));

var _config = require("./loaders/config.js");

var _error = _interopRequireDefault(require("./middleware/error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mainRouter from './routes/index.js';
globalThis.cl = console.log;
globalThis.warning = _chalk["default"].hex('#FFA500');
var app = (0, _express["default"])(); // Body parser

app.use(_express["default"].json()); // Mount Routes
// app.use('/', mainRouter);
// Error Handler

app.use(_error["default"]);
app.get('/', function (req, res) {
  res.send('API connected!');
});
app.listen(_config.PORT, function () {
  return cl(_chalk["default"].bold(warning("API server is running in ".concat(_config.NODE_ENV, " mode on port ").concat(_config.PORT))));
});