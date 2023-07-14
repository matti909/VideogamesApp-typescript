"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGenres = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('dotenv').config();
const DOGS_API_KEY = 'd64cc61c647b428dafe6d53ec066bc62';
const getGenres = async function () {
  let genresData = [];
  const urlData = await _axios.default.get(`https://api.rawg.io/api/genres?key=${DOGS_API_KEY}`);
  urlData.data.results.forEach(v => {
    genresData.push({
      id: v.id,
      name: v.name.toLowerCase()
    });
  });
  return genresData;
};
exports.getGenres = getGenres;