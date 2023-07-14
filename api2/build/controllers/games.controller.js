"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateGame = exports.getGames = exports.getGame = exports.deleteGame = exports.createGame = void 0;
var _game = require("./../services/game.service");
var _error = require("./../utils/error.handle");
const getGame = async (req, res) => {
  const {
    id
  } = req.params;
  if (!id) {
    return res.status(400).send({
      msg: 'No encontrado'
    });
  }
  try {
    const response = await (0, _game.getApiInfoById)(parseInt(id));
    return res.status(200).json(response);
  } catch (err) {
    (0, _error.handleHttp)(res, 'Aqui un error');
  }
};
exports.getGame = getGame;
const getGames = async (req, res) => {
  try {
    const {
      name
    } = req.query;
    const named = name?.toString().trim();
    const total = await (0, _game.getVideogames)();
    if (named) {
      const searchGame = total.filter(game => game.name.toLowerCase().includes(named.toLowerCase()));
      if (searchGame.length) {
        res.status(200).json(searchGame);
      } else {
        res.status(400).json({
          msg: 'Game not Found 😕'
        });
      }
    } else {
      res.status(200).json(total);
    }
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Server Error'
    });
  }
};
exports.getGames = getGames;
const updateGame = async (req, res) => {
  try {} catch (err) {
    (0, _error.handleHttp)(res, 'Aqui un error');
  }
};
exports.updateGame = updateGame;
const createGame = async (req, res, next) => {
  try {
    const post = await (0, _game.createNewGame)(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        post
      }
    });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({
        status: 'fail',
        message: 'Post with that title already exist'
      });
    }
    next(err);
  }
};
exports.createGame = createGame;
const deleteGame = async (req, res) => {
  try {} catch (err) {
    (0, _error.handleHttp)(res, 'Aqui un error');
  }
};
exports.deleteGame = deleteGame;