import { getGame, getGames } from '@constrollers/games.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getGames);

router.get('/:id', getGame);

export { router };
