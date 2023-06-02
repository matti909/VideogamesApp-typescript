import {
  getGame,
  getGames,
  postGame,
  updateGame,
  deleteGame
} from '@constrollers/games.controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(getGames).post(postGame);

router.route('/:id').get(getGame).put(updateGame).delete(deleteGame);

export { router };
