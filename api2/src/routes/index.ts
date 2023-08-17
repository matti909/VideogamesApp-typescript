import 'dotenv/config';
import { Router } from 'express';
import { router as gamesRouter } from './games';
import { router as genresRouter } from './genres';

const router = Router();

router.use('/games', gamesRouter);
router.use('/genres', genresRouter);

export default router;
