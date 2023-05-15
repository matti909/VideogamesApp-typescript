import 'dotenv/config';
const { DOGS_API_KEY } = process.env;

import Game from '../models/game.model';
import axios from 'axios';

interface Game {
  id: number;
  name: string;
  background_image?: string;
  rating?: number;
}

const getVideogames = async (): Promise<Game[]> => {
  const apiGames: Game[] = [];

  for (let i = 1; i <= 5; i++) {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${DOGS_API_KEY}&page=${i}`
    );
    const games: Game[] = response.data.results;
    apiGames.push(...games);
  }

  const resultado: Game[] = apiGames.map((game) => {
    return {
      id: game.id,
      name: game.name,
      image: game.background_image,
      rating: game.rating ? parseFloat(game.rating.toFixed(2)) : undefined
    };
  });

  return resultado;
};

const insertGame = async (game: Game) => {
  const responseInsert = new Game(game);
  const res = responseInsert.save();
  return res;
};

export { insertGame, getVideogames };
