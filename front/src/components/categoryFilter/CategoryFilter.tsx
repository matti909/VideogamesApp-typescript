import React, { useState, useMemo } from 'react';
import { Filter, IGame, IGenre } from 'interfaces/videogames.interface';

type Props = {
  games: IGame[];
  onChange: (filter: Filter) => void;
};

export const CategoryFilter = ({ games, onChange }: Props) => {
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

    onChange(draft.size ? (game) => draft.has(game) : null);
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
    <div
      style={{
        border: '1px solid',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <h4>Categorias:</h4>
      <ul style={{ marginTop: '80px' }}>
        {generos.map((genero) => (
          <li key={genero} style={{ display: 'flex', gap: '12px', listStyle: 'none' }}>
            <input
              type="checkbox"
              name={genero}
              value={genero}
              onChange={(e) => handleChange(genero, e.target.checked)}
            />
            <label htmlFor={genero}>{genero}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
