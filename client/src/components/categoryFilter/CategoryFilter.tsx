import { useState, useRef } from "react";
import styles from "./CategoryFilter.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Filter, IGame } from "../../interfaces/videogames.interface";
import React, { useMemo } from "react";

type Props = {
  games: IGame[];
  onChange: (filter: Filter) => void;
};

const CategoryFilter = ({ games, onChange }: Props) => {
  const [active, setActive] = useState(false);
  const [selectedGenres, _setSelectedGenres] = useState<Set<string>>(new Set());

  const ref = useRef(new Set());

  const menuToggler = () => setActive((prev) => !prev);

  function handleChange(genero: string, isChecked: boolean) {
    if (isChecked) {
      selectedGenres.add(genero);
    } else {
      selectedGenres.delete(genero);
    }

    onChange(
      selectedGenres.size ? (game) => selectedGenres.has(game.toString()) : null
    );
  }

  const generos = useMemo(() => {
    const buffer: Set<string> = new Set();

    for (const game of games) {
      game.genres.forEach((genre) => {
        buffer.add(genre.toString());
      });
    }

    return Array.from(buffer);
  }, [games]);

  console.log(ref.current);

  return (
    <div className={styles.containerfilter}>
      <div className={styles["filter-by-type"]}>
        <button
          className={styles.containerfilter__toggler}
          onClick={menuToggler}
        >
          {!active ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}{" "}
          <span style={{ fontSize: "12px" }}>Filtros</span>
        </button>
        {active && (
          <div className={styles["type-options"]}>
            {generos.map((genero) => (
              <div key={genero} className={styles["group-type"]}>
                <input
                  type="checkbox"
                  name={genero}
                  value={genero}
                  checked={selectedGenres.has(genero)}
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

export default React.memo(CategoryFilter);
