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
exports.getGenres = void 0;
require('dotenv').config();
const axios = require('axios');
const { DOGS_API_KEY } = process.env;
const getGenres = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let genresData = [];
        const urlData = yield axios.get(`https://api.rawg.io/api/genres?key=${DOGS_API_KEY}`);
        urlData.data.results.forEach((v) => {
            genresData.push({
                id: v.id,
                name: v.name.toLowerCase()
            });
        });
        return genresData;
    });
};
exports.getGenres = getGenres;
