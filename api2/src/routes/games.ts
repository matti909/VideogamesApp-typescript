import { getGame, getGames, postGame } from '../controllers/games.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getGames);

router.get('/:id', getGame);

router.post('/post', postGame);

export { router };
