import { Request, Response } from 'express';
import {
  createNewGame,
  getApiInfoById,
  getVideogames
} from './../services/game.service';
import { handleHttp } from './../utils/error.handle';

const getGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({ msg: 'No encontrado' });
  }
  try {
    const response = await getApiInfoById(parseInt(id));
    return res.status(200).json(response);
  } catch (err) {
    handleHttp(res, 'Aqui un error');
  }
};

const getGames = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const named = name?.toString().trim();
    const total = await getVideogames();

    if (named) {
      const searchGame = total.filter((game) =>
        game.name.toLowerCase().includes(named.toLowerCase())
      );

      if (searchGame.length) {
        res.status(200).json(searchGame);
      } else {
        res.status(400).json({ msg: 'Game not Found 😕' });
      }
    } else {
      res.status(200).json(total);
    }
  } catch (error) {
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

const updateGame = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, 'Aqui un error');
  }
};

const postGame = async ({ body }: Request, res: Response) => {
  try {
    const newGame = await createNewGame({ ...body });
    res.status(201).json({
      status: 'succes',
      data: {
        newGame
      }
    });
  } catch (err) {
    handleHttp(res, 'Aqui un error en tu post', err);
  }
};

const deleteGame = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, 'Aqui un error');
  }
};

export { getGame, getGames, updateGame, deleteGame, postGame };
