import React, { useState, useMemo, useCallback } from "react";
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
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());

  // Generación de la lista de géneros únicos utilizando un bucle
  const generos = useMemo(() => {
    const buffer: Set<string> = new Set();

    for (const game of games) {
      game.genres.forEach((genre) => {
        buffer.add(genre.toString());
      });
    }

    return Array.from(buffer);
  }, [games]);

  // Manejo de cambios en la selección de géneros
  const handleChange = useCallback(
    (genero: string, isChecked: boolean) => {
      const newSelectedGenres = new Set(selectedGenres);

      if (isChecked) {
        newSelectedGenres.add(genero);
      } else {
        newSelectedGenres.delete(genero);
      }

      setSelectedGenres(newSelectedGenres);

      // Actualización de la función onChange
      onChange(
        newSelectedGenres.size
          ? (game) => newSelectedGenres.has(game.toString())
          : null
      );
    },
    [selectedGenres, onChange]
  );

  const menuToggler = () => setActive((prev) => !prev);

  return (
    <div className={style.containerfilter}>
      <div className={style["filter-by-type"]}>
        <button
          className={style.containerfilter__toggler}
          onClick={menuToggler}
        >
          {!active ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}{" "}
          <p className={style.containerfilter__spen}>Filtros</p>
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
