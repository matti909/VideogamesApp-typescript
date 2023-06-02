import React from 'react';
import { IGame } from 'interfaces/videogames.interface';
import styles from './CardConteiner.module.scss';

export const CardConteiner: React.FC<IGame> = ({ name, background_image, genres, rating }) => {
  let genre = genres.map((e) => e);
  return (
    <div className={styles.cardContainer}>
      <img src={background_image} alt="unknown" />
      <div>
        <h2>
          <p>{name}</p>
        </h2>
        {<p>Generos: {genre.join(' , ')}</p>}
        <p>Rating: {'★'.repeat(rating).padEnd(5, '☆')}</p>
      </div>
    </div>
  );
};
