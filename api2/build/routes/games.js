"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const games_controller_1 = require("../controllers/games.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', games_controller_1.getGames);
router.get('/:id', games_controller_1.getGame);
