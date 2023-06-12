import { getGenre } from '../controllers/genres.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getGenre);

export { router };
