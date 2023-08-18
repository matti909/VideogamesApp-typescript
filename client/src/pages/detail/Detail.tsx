import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videogames } from "../../service/fetchGames";
import { IGame } from "../../interfaces/videogames.interface";
import style from "./Detail.module.scss";
import { Loader } from "../../components/mkdir/Loader";

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
    <main style={{ paddingTop: "100px" }} className={style.detailContainer}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section>
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
          </section>

          <section>
            <div className={style.detailSection}>
              <h1 className={style.detailSection__name}>{game?.name}</h1>
              <p className={style.detailSection__des}> {game?.description}</p>
              <br />
              <p style={{ fontSize: "30px" }}>
                Rating: <span className={style.ratingStars}>{ratingStars}</span>
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};
