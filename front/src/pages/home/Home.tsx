import React from 'react';
import Header from '../../components/header/Header';
import { useAppState } from '../../context/AppStateContext';
import FilterBar from '../../components/filterBar/FilterBar';
import { Pagination } from '../../components/paginado/Pagination';

type Props = {};

const Home = (props: Props) => {
  const { state } = useAppState();
  const { allVideogames } = state;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Pagination games={allVideogames} />
        </div>
        <FilterBar />
      </main>
    </>
  );
};

export default Home;
