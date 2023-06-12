"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _genres = require("../controllers/genres.controller");
var _express = require("express");
const router = (0, _express.Router)();
exports.router = router;
router.get('/', _genres.getGenre);