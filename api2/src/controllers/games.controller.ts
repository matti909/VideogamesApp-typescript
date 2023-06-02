import { Request, Response } from 'express';
import { getApiInfoById, getVideogames } from 'src/services/game.service';
import { handleHttp } from 'src/utils/error.handle';

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
  const { name } = req.query;
  const total = await getVideogames();

  if (name) {
    let searchGame = total.filter((game) =>
      game.name.toLowerCase().includes(String(name))
    );
    searchGame.length
      ? res.status(200).send(searchGame)
      : res.status(404).json({ msg: 'Game not Found 😕' });
  } else {
    res.status(201).send(total);
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
    res.send(console.log('hello world'));
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
