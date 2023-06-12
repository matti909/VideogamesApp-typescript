import { getGenres } from './../services/genre.service';
import { Request, Response } from 'express';
import { handleHttp } from './../utils/error.handle';

const getGenre = async (req: Request, res: Response) => {
  try {
    const all = await getGenres();
    return res.status(200).json(all);
  } catch (error) {
    handleHttp(res, 'error en genre');
  }
};
export { getGenre };
