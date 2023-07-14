"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
require("dotenv/config");
var _express = require("express");
var _games = require("./games");
var _genres = require("./genres");
const router = (0, _express.Router)();
exports.router = router;
router.use('/games', _games.router);
router.use('/genres', _genres.router);