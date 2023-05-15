import { NextFunction, Request, Response } from 'express';

const logsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

export { logsMiddleware };
