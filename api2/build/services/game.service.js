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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiInfoById = exports.getVideogames = void 0;
require('dotenv').config();
const { DOGS_API_KEY } = process.env;
const axios_1 = __importDefault(require("axios"));
const getVideogames = () => __awaiter(void 0, void 0, void 0, function* () {
    const apiGames = [];
    for (let i = 1; i <= 5; i++) {
        const response = yield axios_1.default.get(`https://api.rawg.io/api/games?key=${DOGS_API_KEY}&page=${i}`);
        const games = response.data.results;
        apiGames.push(...games);
    }
    const resultado = apiGames.map((game) => {
        return {
            id: game.id,
            name: game.name.toLowerCase(),
            slug: game.slug,
            background_image: game.background_image,
            released: game.released,
            rating: game.rating !== undefined ? parseFloat(game.rating.toFixed(2)) : 0,
            platforms: game.platforms.map((p) => p.platform.name),
            genres: game.genres.map((g) => g.slug)
        };
    });
    return resultado;
});
exports.getVideogames = getVideogames;
const getApiInfoById = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.get(`https://api.rawg.io/api/games/${id}?key=${DOGS_API_KEY}`);
            const gamesData = {
                id: res.data.id,
                name: res.data.name.toLowerCase(),
                slug: res.data.slug,
                description: res.data.description_raw,
                background_image: res.data.background_image,
                released: res.data.released,
                rating: res.data.rating,
                platforms: res.data.platforms.map((p) => p.platform.name),
                genres: res.data.genres.map((g) => g.name)
            };
            return gamesData;
        }
        catch (error) {
            return null;
        }
    });
};
exports.getApiInfoById = getApiInfoById;
