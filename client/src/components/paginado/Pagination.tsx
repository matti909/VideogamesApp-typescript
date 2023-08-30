import { useAppState } from "../../context/useAppState";
import { IGame } from "../../interfaces/videogames.interface";
import { ListOfGame } from "../listOfGame/ListOfGame";
import style from "./Pagination.module.scss";

interface Props {
  matches: IGame[];
}

export const Pagination = ({ matches }: Props) => {
  const { actions, state } = useAppState();

  const { currentPage, itemsPerPage, maxPageNumberLimit, minPageNumberLimit } =
    state;

  const { handleMoreClick, handleNextbtn, handlePrevbtn } = actions;

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
          className={`${currentPage === number ? style.active : null}`}
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
    <main className={style.container}>
      <ul className={style.pageNumbers}>
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
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <section style={{ flex: 1 }}>
        <ListOfGame games={currentItems} />
      </section>
    </main>
  );
};
