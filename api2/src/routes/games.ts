import * as route from '@constrollers/games';
import { Router } from 'express';

const router = Router();

router.get('/', route.getGames);

router.get('/:id', route.getGame);

router.post('/', route.postGame);

router.put('/:id', route.updateGame);

router.delete('/:id', route.deleteGame);

export { router };
