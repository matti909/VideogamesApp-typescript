"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const genres_controller_1 = require("../controllers/genres.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', genres_controller_1.getGenre);
