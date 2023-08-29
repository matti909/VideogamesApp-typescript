import React, { useState, useRef, useMemo } from "react";
import style from "./CategoryFilter.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Filter, IGame } from "../../interfaces/videogames.interface";

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
    <div className={style.containerfilter}>
      <div className={style["filter-by-type"]}>
        <button
          className={style.containerfilter__toggler}
          onClick={menuToggler}
        >
          {!active ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}{" "}
          <span className={style.containerfilter__spen}>Filtros</span>
        </button>
        {active && (
          <div className={style["type-options"]}>
            {generos.map((genero) => (
              <div key={genero} className={style["group-type"]}>
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
