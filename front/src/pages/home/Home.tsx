import React from 'react';
import Header from '../../components/header/Header';
import { useAppState } from '../../context/AppStateContext';
import { Pagination } from '../../components/paginado/Pagination';

export const Home = () => {
  const { state } = useAppState();
  const { allVideogames } = state;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section style={{ flex: '1' }}>
          <Pagination games={allVideogames} />
        </section>
      </main>
    </>
  );
};
