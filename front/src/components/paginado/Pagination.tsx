import { ListOfGame } from '../../components/listOfGame/ListOfGame';
import type { Filter, IGame } from 'interfaces/videogames.interface';
import React, { useMemo, useState } from 'react';
import styles from './Pagination.module.scss';
import { CategoryFilter } from '../../components/categoryFilter/CategoryFilter';

interface Props {
  games: IGame[];
}

export const Pagination = ({ games }: Props) => {
  const [filters, setFilter] = useState<Record<string, Filter>>({
    genero: null,
    plataforma: null,
  });

  const matches = useMemo(() => {
    const filterToApply = Object.values(filters).filter(Boolean!);
    let matches = games;

    for (let filter of filterToApply) {
      matches = matches.filter((el) => el.genres.some(filter));
    }
    return matches;
  }, [games, filters]);

  console.log(matches);

  const [currentPage, setcurrentPage] = useState<number>(1);
  const [itemsPerPage, setitemsPerPage] = useState<number>(8);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState<number>(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState<number>(0);

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems: IGame[] = matches.slice(indexOfFirstItem, indexOfLastItem);

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  const handleClick = (event: any) => {
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

  const pages = [];
  for (let i = 1; i <= Math.ceil(games.length / itemsPerPage); i++) {
    pages.push(i);
  }

  let renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number.toString()} onClick={handleClick}>
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
    <div style={{ display: 'flex' }}>
      <aside>
        <CategoryFilter
          games={games}
          onChange={(filter: Filter) => setFilter((filters) => ({ ...filters, genero: filter }))}
        />
      </aside>
      <h2>{matches.length} Resultados</h2>
      <div>
        <section style={{ flex: '1' }}>
          <h1>VIDEOGAMES APP </h1>
          <ul className={styles.unsort}>
            <li>
              <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false}>
                Prev
              </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <li>
              <button
                onClick={handleNextbtn}
                disabled={currentPage === pages[pages.length - 1] ? true : false}
              >
                Next
              </button>
            </li>
          </ul>
          <ListOfGame games={currentItems} />
          <button onClick={handleLoadMore}>Load More</button>
        </section>
      </div>
    </div>
  );
};
