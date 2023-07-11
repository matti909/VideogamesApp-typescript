import { FormEvent, useState } from "react";
import style from "./Form.module.scss";
import { Select, SelectOptions } from "../../components/select/Select";
import { gameRequest } from "./Post";

const options = [
  {
    id: 4,
    name: "action",
  },
  {
    id: 51,
    name: "indie",
  },
  {
    id: 3,
    name: "adventure",
  },
  {
    id: 5,
    name: "rpg",
  },
  {
    id: 10,
    name: "strategy",
  },
  {
    id: 2,
    name: "shooter",
  },
  {
    id: 40,
    name: "casual",
  },
  {
    id: 14,
    name: "simulation",
  },
  {
    id: 7,
    name: "puzzle",
  },
  {
    id: 11,
    name: "arcade",
  },
  {
    id: 83,
    name: "platformer",
  },
  {
    id: 59,
    name: "massively multiplayer",
  },
  {
    id: 1,
    name: "racing",
  },
  {
    id: 15,
    name: "sports",
  },
  {
    id: 6,
    name: "fighting",
  },
  {
    id: 19,
    name: "family",
  },
  {
    id: 28,
    name: "board games",
  },
  {
    id: 34,
    name: "educational",
  },
  {
    id: 17,
    name: "card",
  },
];

type Genre = {
  name: string;
};

export type Game = {
  name: string;
  released: string;
  description: string;
  genres: Genre[];
};

export const Form = () => {
  const [games, setGame] = useState<Game>({
    name: "",
    released: "",
    description: "",
    genres: [],
  });

  const [value1, setValue1] = useState<SelectOptions[]>([options[0]]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(games);
    const res = await gameRequest(games);
    //const data = await res.json();
    console.log(res);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.container__form}>
        <div>
          <label htmlFor="name">Your name: </label>
          <input
            className={style.pimpum}
            required
            type="text"
            id="name"
            placeholder="ingresa un nombre"
            value={games.name}
            onChange={(e) => setGame({ ...games, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="released">Your released</label>
          <input
            className={style.pimpum}
            required
            type="date"
            id="released"
            value={games.released}
            onChange={(e) => setGame({ ...games, released: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="description">Your description</label>
          <textarea
            className={style.area}
            rows={3}
            id="description"
            name="description"
            value={games.description}
            onChange={(e) => setGame({ ...games, description: e.target.value })}
          />
        </div>
        <div style={{ width: "10em" }}></div>
        <Select
          multiple
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setGame(() => {
              return {
                ...games,
                genres: games.genres.concat(value1),
              };
            });
          }}
        >
          <b>add step</b>
        </button>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
