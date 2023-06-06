import React, { createContext, useContext, useState, useEffect, ReactEventHandler } from 'react';
import { IGame, IGenre } from 'interfaces/videogames.interface';
import { videogames } from '../service/fetchGames';

interface context {
  state: {
    favorites: string[];
    allVideogames: IGame[];
    genres: IGenre[];
    currentPage: number;
    itemsPerPage: number;
    pageNumberLimit: number;
    maxPageNumberLimit: number;
    minPageNumberLimit: number;
  };
  actions: {
    toggleFavorites: (image: string) => void;
    handleLoadMore: () => void;
    handleMoreClick: (event: any) => void;
    handleNextbtn: () => void;
    handlePrevbtn: () => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const AppStateContext = createContext({} as context);

export const AppStateProvider = ({ children }: Props) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(8);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  const handleMoreClick = (event: any) => {
    setcurrentPage(Number(event.target.id));
  };

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

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

  return (
    <AppStateContext.Provider
      value={{
        state: {
          favorites,
          allVideogames,
          genres,
          currentPage,
          itemsPerPage,
          maxPageNumberLimit,
          minPageNumberLimit,
          pageNumberLimit,
        },
        actions: {
          toggleFavorites,
          handleMoreClick,
          handleLoadMore,
          handleNextbtn,
          handlePrevbtn,
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
