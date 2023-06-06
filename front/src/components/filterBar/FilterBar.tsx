import React, { useState } from 'react';
import styles from './FilterBar.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useAppState } from '../../context/AppStateContext';
import { IGame } from 'interfaces/videogames.interface';

type Props = {};

const FilterBar = (props: Props) => {
  const { state, actions } = useAppState();
  const { genres } = state;

  const [active, setActive] = useState(false);

  const menuToggler = () => setActive((prev) => !prev);

  return (
    <div className={styles.containerfilter}>
      <div className={styles['filter-by-type']}>
        <button className={styles.containerfilter__toggler} onClick={menuToggler}>
          {!active ? <BiMenuAltRight /> : <AiOutlineCloseSquare />} <span>filtros</span>
        </button>
        {active && (
          <div className={styles['type-options']}>
            {genres.map((genre) => (
              <div key={genre.id} className={styles['group-type']}>
                <label>
                  <input
                    type="checkbox"
                    //onChange={(e) => handleCheckbox(e)}
                    name={genre.name}
                    id={genre.name}
                  />
                  {genre.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
