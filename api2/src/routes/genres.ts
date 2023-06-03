import { getGenre } from '@constrollers/genres.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getGenre);

export { router };
