import { Request, Response, NextFunction, Router } from 'express';
import { registerCtlr, loginCtrl } from '@constrollers/auth.controller';

const router = Router();

router.post('/register', registerCtlr);
router.post('/login', loginCtrl);

export { router };
