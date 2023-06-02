import React, { useState } from 'react';
import Header from '../components/header/Header';
import style from './Home.module.scss';
import { ListOfGame } from '../components/listOfGame/ListOfGame';
import { useAppState } from '../context/AppStateContext';
import FilterBar from '../components/filterBar/FilterBar';

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
          <ListOfGame games={allVideogames} />
        </div>
        <FilterBar />
      </main>
    </>
  );
};

export default Home;
