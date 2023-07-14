import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videogames } from "../../service/fetchGames";
import { IGame } from "../../interfaces/videogames.interface";

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<IGame | null>(null);

  useEffect(() => {
    videogames
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .getById({ id: parseInt(id!) })
      .then((r) => setGame(r.data))
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  console.log(game);

  return (
    <div>
      <h2>{game?.name}</h2>
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "120px",
            height: "100px",
            objectFit: "cover",
            display: "flex",
          }}
          src={game?.background_image}
          alt="null"
        />
      </div>
    </div>
  );
};
