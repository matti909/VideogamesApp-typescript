import { Request, Response } from 'express';
import { getVideogames, insertGame } from 'src/services/game.service';
import { handleHttp } from 'src/utils/error.handle';

const getGame = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, 'Aqui un error');
  }
};

const getGames = async (req: Request, res: Response) => {
  try {
    const response = await getVideogames();
    console.log('aqui');
    res.send(response);
  } catch (err) {
    handleHttp(res, 'Aqui un error');
  }
};

const updateGame = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, 'Aqui un error');
  }
};

const postGame = async (req: Request, res: Response) => {
  try {
    const resq = await insertGame(req.body);
    res.send(resq);
  } catch (err) {
    handleHttp(res, 'Aqui un error', err);
  }
};

const deleteGame = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, 'Aqui un error');
  }
};

export { getGame, getGames, updateGame, deleteGame, postGame };
