"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGenres = void 0;
require('dotenv').config();
const axios = require('axios');
const {
  DOGS_API_KEY
} = process.env;
const getGenres = async function () {
  let genresData = [];
  const urlData = await axios.get(`https://api.rawg.io/api/genres?key=${DOGS_API_KEY}`);
  urlData.data.results.forEach(v => {
    genresData.push({
      id: v.id,
      name: v.name.toLowerCase()
    });
  });
  return genresData;
};
exports.getGenres = getGenres;