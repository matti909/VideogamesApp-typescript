import { getGame, getGames, createGame } from '../controllers/games.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getGames);

router.get('/:id', getGame);

router.post('/', createGame);

export { router };
