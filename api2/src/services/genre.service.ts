import { IGenre } from 'src/interfaces/game.interface';

require('dotenv').config();
import axios from 'axios';
const DOGS_API_KEY = 'd64cc61c647b428dafe6d53ec066bc62';

const getGenres = async function () {
  let genresData: IGenre[] = [];

  const urlData = await axios.get(
    `https://api.rawg.io/api/genres?key=${DOGS_API_KEY}`
  );
  urlData.data.results.forEach((v: IGenre) => {
    genresData.push({
      id: v.id,
      name: v.name.toLowerCase()
    });
  });
  return genresData;
};
export { getGenres };
