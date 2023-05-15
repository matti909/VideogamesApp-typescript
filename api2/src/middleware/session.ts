import { NextFunction, Request, Response } from 'express';
import { verifyToken } from 'src/utils/jwt.handle';

const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const isOk = verifyToken(`${jwt}`);
    if (isOk) {
      res.status(401);
      res.send('no tiene una session valida!');
    } else {
      next();
    }
    next();
  } catch (error) {
    res.status(400);
    res.send('SESSION NO VALIDA');
  }
};

export { checkJWT };
