"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
require("dotenv/config");
var _express = require("express");
var _games = require("../controllers/games.controller");
var _genres = require("../controllers/genres.controller");
const router = (0, _express.Router)();
exports.router = router;
router.get('/games', _games.getGames);
router.get('/games/:id', _games.getGame);
router.get('/genres', _genres.getGenre);