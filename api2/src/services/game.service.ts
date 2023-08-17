import axios from 'axios';
import { Games } from '../entities/games.entity';
import { AppDS } from '../config/ormconfig';
import type { IGame, IGenre, IPlatform } from '../interfaces/game.interface';
import { Genre } from '../entities/genre.entity';

require('dotenv').config();
const DOGS_API_KEY = 'd64cc61c647b428dafe6d53ec066bc62';

const postRepository = AppDS.getRepository(Games);

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
      platforms: game.platforms?.map((p) => p.platform.name) as IPlatform[],
      genres: game.genres.map((g) => g.slug) as IGenre[]
    };
  });

  //DB local
  const getPost = async (): Promise<IGame[]> => {
    const gamesRepository = AppDS.getRepository(Games);
    const games = await gamesRepository.find({ relations: ['genres'] });

    const gamesResponse: IGame[] = games.map((game) => ({
      id: game.id,
      name: game.name,
      description: game.description,
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
      genres: game.genres.map((p) => p.name)
    }));

    return gamesResponse;
  };

  const dbGames = await getPost();

  return [...dbGames, ...resultado];
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

const createNewGame = async (body: Partial<Games>) => {
  // Obtener el repositorio de juegos y géneros
  const gamesRepository = AppDS.getRepository(Games);
  const genreRepository = AppDS.getRepository(Genre);

  const genres = body.genres
    ? await Promise.all(
        body.genres.map(async (genreName) => {
          const genre = new Genre();
          genre.name = genreName.name;
          return genre;
        })
      )
    : [];

  // Crear el nuevo juego con los géneros asociados
  const newGame = gamesRepository.create({
    name: body.name,
    background_image: body.background_image,
    description: body.description,
    released: body.released,
    rating: body.rating,
    genres: genres
  });

  // Guardar el nuevo juego en la base de datos
  return await gamesRepository.save(newGame);
};

export { getVideogames, getApiInfoById, createNewGame };
