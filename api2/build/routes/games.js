"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _games = require("../controllers/games.controller");
var _express = require("express");
const router = (0, _express.Router)();
exports.router = router;
router.get('/', _games.getGames);
router.get('/:id', _games.getGame);
router.post('/', _games.createGame);