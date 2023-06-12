import { getGame, getGames } from '../controllers/games.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getGames);

router.get('/:id', getGame);

export { router };
