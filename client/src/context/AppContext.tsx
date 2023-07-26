import React, { createContext, useState, useEffect } from "react";
import { IGame, IGenre } from "../interfaces/videogames.interface";
import { videogames } from "../service/fetchGames";

interface context {
  state: {
    favorites: IGame[];
    allVideogames: IGame[];
    genres: IGenre[];
    currentPage: number;
    itemsPerPage: number;
    pageNumberLimit: number;
    maxPageNumberLimit: number;
    minPageNumberLimit: number;
  };
  actions: {
    toggleFavorites: (arg0: IGame) => void;
    handleLoadMore: () => void;
    handleMoreClick: (event: never) => void;
    handleNextbtn: () => void;
    handlePrevbtn: () => void;
  };
}

interface Props {
  children: React.ReactNode;
}

export const AppStateContext = createContext({} as context);

export const AppStateProvider = ({ children }: Props) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(8);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  const handleMoreClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setcurrentPage(Number(event.currentTarget.id));
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

  const [favorites, setFavorites] = useState<IGame[]>([]);

  console.log(favorites);

  function toggleFavorites(game: IGame) {
    const isFavorite = favorites.some((favorite) => favorite.id === game.id);
    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== game.id));
    } else {
      setFavorites([...favorites, game]);
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
