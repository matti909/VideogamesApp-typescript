import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { IGame } from 'interfaces/videogames.interface';
import { videogames } from '../service/fetchGames';
import { ListOfGame } from '../components/listOfGame/ListOfGame';

type Props = {};

const Home = (props: Props) => {
  const [allVideogames, setAllVideogames] = useState<IGame[] | null>(null);

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

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <ListOfGame games={allVideogames} />
        </div>
      </main>
    </>
  );
};

export default Home;
