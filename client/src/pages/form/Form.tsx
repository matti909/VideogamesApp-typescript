import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Form.module.scss";
import { Select, SelectOptions } from "../../components/select/Select";
import { gameRequest } from "./Post";
import { useNavigate } from "react-router-dom";

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
  background_image: string;
  description: string;
  released: string;
  rating: number;
  genres: Genre[];
};

export const Form = () => {
  const [games, setGame] = useState<Game>({
    name: "",
    background_image: "",
    released: "",
    description: "",
    rating: 0,
    genres: [],
  });

  const navigate = useNavigate();

  const [value1, setValue1] = useState<SelectOptions[]>([options[0]]);

  const notify = () => {
    toast.success("successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gameWithGenres: Game = {
      ...games,
      genres: value1.map((genre) => ({ name: genre.name })),
    };
    console.log(gameWithGenres);
    const res = await gameRequest(gameWithGenres);
    console.log(res);

    if (res.status === "success") {
      navigate("/");
      toast.success("El juego se ha guardado correctamente");
    }
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
          <label htmlFor="background_image">Imagen de fondo: </label>
          <input
            className={style.pimpum}
            required
            type="text"
            id="background_image"
            placeholder="Ingresa la URL de la imagen"
            value={games.background_image}
            onChange={(e) =>
              setGame({ ...games, background_image: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            className={style.pimpum}
            required
            type="number"
            id="rating"
            max={5}
            min={0}
            step="0.1"
            value={games.rating}
            onChange={(e) =>
              setGame({ ...games, rating: parseFloat(e.target.value) })
            }
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
          <button onClick={notify} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
