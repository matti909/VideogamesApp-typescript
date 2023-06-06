import React, { createContext, useContext, useState, useEffect, ReactEventHandler } from 'react';
import { IGame, IGenre } from 'interfaces/videogames.interface';
import { videogames } from '../service/fetchGames';

interface context {
  state: {
    favorites: string[];
    allVideogames: IGame[];
    genres: IGenre[];
    filteredGames: IGame[];
  };
  actions: {
    toggleFavorites: (image: string) => void;
    handleCheckbox: (e: any) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const AppStateContext = createContext({} as context);

export const AppStateProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const [allVideogames, setAllVideogames] = useState<IGame[]>([]);

  useEffect(() => {
    videogames
      .getAll()
      .then((r) => {
        setAllVideogames(r.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    videogames
      .getCategory()
      .then((r) => {
        setGenres(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function toggleFavorites(image: string) {
    if (favorites.includes(image)) {
      setFavorites(() => favorites.filter((favorite) => favorite !== image));
    } else {
      setFavorites((favorites) => [...favorites, image]);
    }
  }

  const [typeSelected, setTypeSelected] = useState({
    action: false,
    indie: false,
    adventure: false,
    rpg: false,
    strategy: false,
    shooter: false,
    casual: false,
    simulation: false,
    puzzle: false,
    arcade: false,
    platformer: false,
    massivemultipleyer: false,
    racing: false,
    sports: false,
    fighting: false,
    family: false,
    boardgames: false,
    educational: false,
    card: false,
    shadow: false,
  });

  const [filteredGames, setFilteredGames] = useState<IGame[]>([]);

  useEffect(() => {
    console.log(filteredGames);
  }, [filteredGames]);

  function filtrarPorGenero(videojuegos: IGame[], genero: string): IGame[] {
    return videojuegos.filter((juego) =>
      juego.genres.some((g) => g.name.toLowerCase() === genero.toLowerCase()),
    );
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeSelected((prevTypeSelected) => ({
      ...prevTypeSelected,
      [e.target.name]: e.target.checked,
    }));

    if (e.target.name) {
      const filteredResults: IGame[] = allVideogames.filter((game) =>
        game.genres.map((type) => type.name).includes(e.target.name),
      );
      setFilteredGames([...filteredGames, ...filteredResults]);
    } else {
      const filteredResults: IGame[] = filteredGames.filter(
        (game) => !game.genres.some((genre) => genre.name === e.target.name),
      );
      setFilteredGames((prevFilteredGames) => [...filteredResults]);
    }
  };

  return (
    <AppStateContext.Provider
      value={{
        state: {
          favorites,
          allVideogames,
          genres,
          filteredGames,
        },
        actions: {
          toggleFavorites,
          handleCheckbox,
        },
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
