"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGenre = void 0;
var _genre = require("./../services/genre.service");
var _error = require("./../utils/error.handle");
const getGenre = async (req, res) => {
  try {
    const all = await (0, _genre.getGenres)();
    return res.status(200).json(all);
  } catch (error) {
    (0, _error.handleHttp)(res, 'error en genre');
  }
};
exports.getGenre = getGenre;