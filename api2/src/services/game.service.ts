import 'dotenv/config';
const { DOGS_API_KEY } = process.env;
import type { IGame, IGenre, IPlatform } from 'src/interfaces/game.interface';
import GameModel from 'src/models/game.model';
import axios from 'axios';

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
      name: game.name,
      slug: game.slug,
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

const insertGame = async (game: IGame) => {
  const responseInsert = new GameModel(game);
  const res = await responseInsert.save();
  return res;
};

export { insertGame, getVideogames };
