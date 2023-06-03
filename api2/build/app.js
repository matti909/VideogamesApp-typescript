"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _compression = _interopRequireDefault(require("compression"));
var _helmet = _interopRequireDefault(require("helmet"));
var _routes = require("./routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('dotenv').config();
const app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(_bodyParser.default.json({
  limit: '50mb'
}));
app.use((0, _cookieParser.default)());
app.use((0, _compression.default)());
app.use((0, _helmet.default)());
app.use((0, _cors.default)());
app.use(_routes.router);
var _default = app;
exports.default = _default;