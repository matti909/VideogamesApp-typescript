import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videogames } from "../../service/fetchGames";
import { IGame } from "../../interfaces/videogames.interface";
import style from "./Detail.module.scss";

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<IGame | null>(null);

  useEffect(() => {
    videogames
      .getById({ id: parseInt(id!) })
      .then((r) => setGame(r.data))
      .catch((e) => {
        console.log(e);
      });
    return () => {
      setGame(null);
    };
  }, [id]);

  console.log(game);

  return (
    <div className={style.detailContainer}>
      <picture className={style.detailSection}>
        <img
          className={style.detailImage}
          src={game?.background_image}
          alt="null"
        />
      </picture>
      <div className={style.detailSection}>
        <h1 className={style.detailSection__name}>{game?.name}</h1>
        <p className={style.detailSection__des}> {game?.description}</p>
      </div>
    </div>
  );
};
