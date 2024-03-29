import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/Loader";
import { IGame } from "../../interfaces/videogames.interface";
import { videogames } from "../../service/fetchGames";
import style from "./Detail.module.scss";

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<IGame | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    videogames
      .getById({ id: parseInt(id!) })
      .then((r) => {
        setGame(r.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
    return () => {
      setGame(null);
    };
  }, [id]);

  console.log(game);

  const ratingStars =
    game?.rating !== undefined ? "★".repeat(game.rating).padEnd(5, "☆") : "";

  return (
    <main>
      {loading ? (
        <div className={style.loading}>
          <Loader />
        </div>
      ) : (
        <section className={style.detail}>
          <picture className={style.detail__section}>
            <img
              className={style.detail__image}
              src={game?.background_image}
              alt="null"
            />
            <span>
              <p>Released:</p> {game?.released}
            </span>
          </picture>

          <article>
            <div className={style.detail__body}>
              <h1 className={style.detail__name}>{game?.name}</h1>
              <p className={style.detail__des}> {game?.description}</p>
              <br />
              <p style={{ fontSize: "30px" }}>
                Rating: <span className={style.ratingStars}>{ratingStars}</span>
              </p>
            </div>
          </article>
        </section>
      )}
    </main>
  );
};
