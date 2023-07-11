import axios from 'axios';
import { Games } from '../entities/games.entity';
import { AppDS } from '../config/ormconfig';
import type { IGame, IGenre, IPlatform } from '../interfaces/game.interface';

require('dotenv').config();
const { DOGS_API_KEY } = process.env;

const getVideogames = async (): Promise<IGame[]> => {
  const apiGames: IGame[] = [];

  for (let i = 1; i <= 5; i++) {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${DOGS_API_KEY}&page=${i}`
    );
    const games: IGame[] = response.data.results;
    apiGames.push(...games);
  }

  const resultado: IGame[] = apiGames.map((game) => {
    return {
      id: game.id,
      name: game.name.toLowerCase(),

      background_image: game.background_image,
      released: game.released,
      rating:
        game.rating !== undefined ? parseFloat(game.rating.toFixed(2)) : 0,
      platforms: game.platforms.map((p) => p.platform.name) as IPlatform[],
      genres: game.genres.map((g) => g.slug) as IGenre[]
    };
  });

  return resultado;
};

const getApiInfoById = async function (id: number) {
  try {
    const res = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${DOGS_API_KEY}`
    );
    const gamesData: IGame = {
      id: res.data.id,
      name: res.data.name.toLowerCase(),

      description: res.data.description_raw,
      background_image: res.data.background_image,
      released: res.data.released,
      rating: res.data.rating,
      platforms: res.data.platforms.map((p) => p.platform.name),
      genres: res.data.genres.map((g) => g.name)
    };

    return gamesData;
  } catch (error) {
    return null;
  }
};

const postRepository = AppDS.getRepository(Games);

const createNewGame = async (body: Partial<Games>) => {
  return await postRepository.save(postRepository.create({ ...body }));
};

export { getVideogames, getApiInfoById, createNewGame };
