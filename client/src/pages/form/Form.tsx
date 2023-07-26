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
    name: "plater",
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
  const navigate = useNavigate();

  const [games, setGame] = useState<Game>({
    name: "",
    background_image: "",
    released: "",
    description: "",
    rating: 0,
    genres: [],
  });

  const [selectGenre, setSelectGenre] = useState<SelectOptions[]>([options[0]]);

  const notify = () => {
    toast.success("inprogress!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gameFormat: Game = {
      ...games,
      genres: selectGenre.map((genre) => ({ name: genre.name })),
    };
    const res = await gameRequest(gameFormat);

    if (res.status === "success") {
      navigate("/");
      toast.success("El juego se ha guardado correctamente");
    }
  };

  const [error, setError] = useState<{ name?: string }>({});

  const validate = (games: Game) => {
    let errors: any = {};
    if (!games.name) {
      errors.name = "Ingresar un Nombre";
    } else if (games.name.length < 4) {
      errors.name = "Al menos 4 caracteres";
    }
    if (!games.description) {
      errors.description = "Ingresar Descripcion";
    } else if (games.description.length < 8) {
      errors.description = "La Descripcion debe tener al menos 8 caracteres";
    }
    if (!games.rating) {
      errors.rating = "Ingresar puntuación";
    } else if (!/^[1-5]$/.test(games.rating.toString())) {
      errors.rating = "Rating must be between 1 and 5";
    }
    return errors;
  };

  let handleBlur = () => {
    let objError = validate(games);
    if (typeof objError === "object" && objError !== null) {
      setError(objError);
    } else {
      setError({});
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.container__form}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            paddingBlock: "14px",
          }}
        >
          <label htmlFor="name">Nombre: </label>
          <input
            className={style.pimpum}
            required
            type="text"
            id="name"
            placeholder="ingresa un nombre"
            value={games.name}
            onBlur={handleBlur}
            onChange={(e) => setGame({ ...games, name: e.target.value })}
          />
          <span
            style={{
              visibility: error.name ? "visible" : "hidden",
            }}
          >
            {error.name}
          </span>
        </div>
        <div>
          <label htmlFor="background_image">Imagen de fondo: </label>
          <input
            className={style.pimpum}
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
            step="0.5"
            value={games.rating}
            onBlur={handleBlur}
            onChange={(e) =>
              setGame({ ...games, rating: parseFloat(e.target.value) })
            }
          />
        </div>

        <div>
          <label htmlFor="released">Lanzamiento</label>
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
          <label htmlFor="description">Descripción</label>
          <textarea
            className={style.area}
            rows={3}
            id="description"
            name="description"
            value={games.description}
            onBlur={handleBlur}
            onChange={(e) => setGame({ ...games, description: e.target.value })}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <Select
              multiple
              options={options}
              value={selectGenre}
              onChange={(o) => setSelectGenre(o)}
            />
            <button
              style={{ marginLeft: "6px" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setGame(() => {
                  return {
                    ...games,
                    genres: games.genres.concat(selectGenre),
                  };
                });
              }}
            >
              <b>add step</b>
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "20px",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={notify}
              type="submit"
            >
              Crear!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
