"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVideogames = exports.getApiInfoById = exports.createNewGame = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _games = require("../entities/games.entity");
var _ormconfig = require("../ormconfig");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('dotenv').config();
const {
  DOGS_API_KEY
} = process.env;
const getVideogames = async () => {
  const apiGames = [];
  for (let i = 1; i <= 5; i++) {
    const response = await _axios.default.get(`https://api.rawg.io/api/games?key=${DOGS_API_KEY}&page=${i}`);
    const games = response.data.results;
    apiGames.push(...games);
  }
  const resultado = apiGames.map(game => {
    return {
      id: game.id,
      name: game.name.toLowerCase(),
      slug: game.slug,
      background_image: game.background_image,
      released: game.released,
      rating: game.rating !== undefined ? parseFloat(game.rating.toFixed(2)) : 0,
      platforms: game.platforms.map(p => p.platform.name),
      genres: game.genres.map(g => g.slug)
    };
  });
  return resultado;
};
exports.getVideogames = getVideogames;
const getApiInfoById = async function (id) {
  try {
    const res = await _axios.default.get(`https://api.rawg.io/api/games/${id}?key=${DOGS_API_KEY}`);
    const gamesData = {
      id: res.data.id,
      name: res.data.name.toLowerCase(),
      slug: res.data.slug,
      description: res.data.description_raw,
      background_image: res.data.background_image,
      released: res.data.released,
      rating: res.data.rating,
      platforms: res.data.platforms.map(p => p.platform.name),
      genres: res.data.genres.map(g => g.name)
    };
    return gamesData;
  } catch (error) {
    return null;
  }
};
exports.getApiInfoById = getApiInfoById;
const postRepository = _ormconfig.AppDS.getRepository(_games.Games);
const createNewGame = async body => {
  return await postRepository.save(postRepository.create({
    ...body
  }));
};

/*
const createNewGame = async function (body: DeepPartial<Games>, game: Games) {
  const res = AppDS.getRepository(Games).create({ ...body });
  return await AppDS.getRepository(Games).save(res);
};
*/
exports.createNewGame = createNewGame;