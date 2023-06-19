import React, { useState, useMemo } from 'react';
import styles from './CategoryFilter.module.scss';
import { Filter, IGame } from 'interfaces/videogames.interface';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

type Props = {
  games: IGame[];
  onChange: (filter: Filter) => void;
};

export const CategoryFilter = ({ games, onChange }: Props) => {
  const [active, setActive] = useState(false);

  const menuToggler = () => setActive((prev) => !prev);
  /* */
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  /* */
  function handleChange(genero: string, isChecked: boolean) {
    const draft = structuredClone(selected);

    if (isChecked) {
      draft.add(genero);
    } else {
      draft.delete(genero);
    }

    onChange(draft.size ? (game) => draft.has(game.toString()) : null);
    setSelected(draft);
  }

  /* */
  const generos = useMemo(() => {
    const buffer: Set<string> = new Set();

    for (let game of games) {
      game.genres.forEach((genre) => {
        buffer.add(genre.toString());
      });
    }

    return Array.from(buffer);
  }, [games]);

  console.log(selected);

  return (
    <div className={styles.containerfilter}>
      <div className={styles['filter-by-type']}>
        <button className={styles.containerfilter__toggler} onClick={menuToggler}>
          {!active ? <BiMenuAltRight /> : <AiOutlineCloseSquare />} <span>filtros</span>
        </button>
        {active && (
          <div className={styles['type-options']}>
            {generos.map((genero) => (
              <div key={genero} className={styles['group-type']}>
                <input
                  type="checkbox"
                  name={genero}
                  value={genero}
                  onChange={(e) => handleChange(genero, e.target.checked)}
                />
                <label htmlFor={genero}>{genero}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
