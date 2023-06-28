"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateGame = exports.postGame = exports.getGames = exports.getGame = exports.deleteGame = void 0;
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
const postGame = async ({
  body
}, res) => {
  try {
    const newGame = await (0, _game.createNewGame)({
      ...body
    });
    res.status(201).json({
      status: 'succes',
      data: {
        newGame
      }
    });
  } catch (err) {
    (0, _error.handleHttp)(res, 'Aqui un error en tu post', err);
  }
};
exports.postGame = postGame;
const deleteGame = async (req, res) => {
  try {} catch (err) {
    (0, _error.handleHttp)(res, 'Aqui un error');
  }
};
exports.deleteGame = deleteGame;