import React, { createContext, useContext, useState } from 'react';
import { IGame } from 'interfaces/videogames.interface';
import { videogames } from '../service/fetchGames';

interface context {
  state: {
    favorites: string[];
    allVideogames: IGame[];
  };
  actions: {
    toggleFavorites: (image: string) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const AppStateContext = createContext({} as context);

export const AppStateProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const [allVideogames, setAllVideogames] = useState<IGame[]>([]);

  React.useEffect(() => {
    videogames
      .getAll()
      .then((r) => {
        setAllVideogames(r.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  function toggleFavorites(image: string) {
    if (favorites.includes(image)) {
      setFavorites(() => favorites.filter((favorite) => favorite !== image));
    } else {
      setFavorites((favorites) => [...favorites, image]);
    }
  }

  return (
    <AppStateContext.Provider
      value={{
        state: {
          favorites,
          allVideogames,
        },
        actions: { toggleFavorites },
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
