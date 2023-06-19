"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGame = exports.deleteGame = exports.updateGame = exports.getGames = exports.getGame = void 0;
const game_service_1 = require("./../services/game.service");
const error_handle_1 = require("./../utils/error.handle");
const getGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send({ msg: 'No encontrado' });
    }
    try {
        const response = yield (0, game_service_1.getApiInfoById)(parseInt(id));
        return res.status(200).json(response);
    }
    catch (err) {
        (0, error_handle_1.handleHttp)(res, 'Aqui un error');
    }
});
exports.getGame = getGame;
const getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const named = name === null || name === void 0 ? void 0 : name.toString().trim();
        const total = yield (0, game_service_1.getVideogames)();
        if (named) {
            const searchGame = total.filter((game) => game.name.toLowerCase().includes(named.toLowerCase()));
            if (searchGame.length) {
                res.status(200).json(searchGame);
            }
            else {
                res.status(400).json({ msg: 'Game not Found 😕' });
            }
        }
        else {
            res.status(200).json(total);
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.getGames = getGames;
const updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        (0, error_handle_1.handleHttp)(res, 'Aqui un error');
    }
});
exports.updateGame = updateGame;
const postGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(console.log('hello world'));
    }
    catch (err) {
        (0, error_handle_1.handleHttp)(res, 'Aqui un error', err);
    }
});
exports.postGame = postGame;
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        (0, error_handle_1.handleHttp)(res, 'Aqui un error');
    }
});
exports.deleteGame = deleteGame;
