import React from 'react';
import styles from './FilterBar.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const FilterBar = () => {
  const [active, setActive] = React.useState(false);

  const menuToggler = () => setActive((prev) => !prev);

  const [typeSelected, setTypeSelected] = React.useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  const handleCheckbox = (e: any) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className={styles.containerfilter}>
      <div className={styles['filter-by-type']}>
        <button className={styles.containerfilter__toggler} onClick={menuToggler}>
          {!active ? <BiMenuAltRight /> : <AiOutlineCloseSquare />} <span>filtros</span>
        </button>

        {active && (
          <div className={styles['type-options']}>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="grass" id="grass" />
              <label htmlFor="grass">Planta</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="fire" id="fire" />
              <label htmlFor="fire">Fuego</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="bug" id="bug" />
              <label htmlFor="bug">Bicho</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="fairy" id="fairy" />
              <label htmlFor="fairy">Hada</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="dragon" id="dragon" />
              <label htmlFor="dragon">Dragón</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="shadow" id="shadow" />
              <label htmlFor="shadow">Fantasma</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="ground" id="ground" />
              <label htmlFor="ground">Tierra</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="normal" id="normal" />
              <label htmlFor="normal">Normal</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="psychic" id="psychic" />
              <label htmlFor="psychic">Psíquico</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="steel" id="steel" />
              <label htmlFor="steel">Acero</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="dark" id="dark" />
              <label htmlFor="dark">Siniestro</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="electric" id="electric" />
              <label htmlFor="electric">Eléctrico</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="fighting" id="fighting" />
              <label htmlFor="fighting">Lucha</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="flying" id="flying" />
              <label htmlFor="flying">Volador</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="ice" id="ice" />
              <label htmlFor="ice">Hielo</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="poison" id="poison" />
              <label htmlFor="poison">Veneno</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="rock" id="rock" />
              <label htmlFor="rock">Roca</label>
            </div>
            <div className={styles['group-type']}>
              <input type="checkbox" onChange={handleCheckbox} name="water" id="water" />
              <label htmlFor="water">Agua</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
