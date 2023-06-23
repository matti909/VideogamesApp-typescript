import { useMemo, useState } from "react";
import { Filter, IGame } from "../../interfaces/videogames.interface";
import { useAppState } from "../../context/AppStateContext";
import { CategoryFilter } from "../categoryFilter/CategoryFilter";
import { ListOfGame } from "../listOfGame/ListOfGame";
import styles from "./Pagination.module.scss";

interface Props {
  games: IGame[];
}

export const Pagination = ({ games }: Props) => {
  const { actions, state } = useAppState();
  const { currentPage, itemsPerPage, maxPageNumberLimit, minPageNumberLimit } =
    state;
  const { handleMoreClick, handleLoadMore, handleNextbtn, handlePrevbtn } =
    actions;

  const [filters, setFilter] = useState<Record<string, Filter>>({
    genero: null,
    plataforma: null,
  });

  const matches = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const filterToApply = Object.values(filters).filter(Boolean!);
    let matches = games;

    for (const filter of filterToApply) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      matches = matches.filter((el) => el.genres.some(filter!));
    }
    return matches;
  }, [games, filters]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems: IGame[] = matches.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(matches.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number.toString()}
          onClick={handleMoreClick}
          //className={`${currentPage === number ? [styles.active].join('') : null}`}
          className={`${currentPage === number ? styles.active : null}`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ minWidth: "6em" }}>
        <CategoryFilter
          games={games}
          onChange={(filter: Filter) =>
            setFilter((filters) => ({ ...filters, genero: filter }))
          }
        />
      </aside>

      <section style={{ flex: 1 }}>
        <h1>VIDEOGAMES APP </h1>

        <header>
          <ul className={styles.pageNumbers}>
            <li>
              <button
                onClick={handlePrevbtn}
                disabled={currentPage === pages[0] ? true : false}
              >
                Prev
              </button>
            </li>

            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <li>
              <button
                onClick={handleNextbtn}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                Next
              </button>
            </li>
          </ul>
        </header>

        <ListOfGame games={currentItems} />
        <button onClick={handleLoadMore}>Load More</button>
      </section>
    </div>
  );
};