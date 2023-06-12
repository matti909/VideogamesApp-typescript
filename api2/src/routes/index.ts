import 'dotenv/config';
import { Router } from 'express';
import { getGames, getGame } from '../controllers/games.controller';
import { getGenre } from '../controllers/genres.controller';

const router = Router();

router.get('/games', getGames);
router.get('/games/:id', getGame);

router.get('/genres', getGenre);

export { router };
