import { IGame } from "../../interfaces/videogames.interface";
import { CardConteiner } from "../card/CardConteiner";
import styles from "./ListOfGame.module.scss";

interface Props {
  games: IGame[] | null;
}

export const ListOfGame = ({ games }: Props) => {
  return (
    <ul className={styles.listOfGame}>
      {games?.map((game) => (
        <li key={game.id}>
          <CardConteiner
            id={game.id}
            name={game.name}
            background_image={game.background_image}
            rating={game.rating}
            platforms={game.platforms}
            genres={game.genres}
          />
        </li>
      ))}
    </ul>
  );
};
