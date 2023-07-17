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
        console.error(e);
      });
    return () => {
      setGame(null);
    };
  }, [id]);

  console.log(game);

  const ratingStars =
    game?.rating !== undefined ? "★".repeat(game.rating).padEnd(5, "☆") : "";

  return (
    <div style={{ paddingTop: "100px" }} className={style.detailContainer}>
      <picture className={style.detailSection}>
        <img
          className={style.detailImage}
          src={game?.background_image}
          alt="null"
        />
        <span>
          <p>Released:</p> {game?.released}
        </span>
      </picture>
      <div className={style.detailSection}>
        <h1 className={style.detailSection__name}>{game?.name}</h1>
        <p className={style.detailSection__des}> {game?.description}</p>
        <br />
        <p style={{ fontSize: "30px" }}>
          Rating: <span className={style.ratingStars}>{ratingStars}</span>
        </p>
      </div>
    </div>
  );
};
