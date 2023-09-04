import { ListOfGame } from "../../components/listOfGame/ListOfGame";
import { useAppState } from "../../context/useAppState";
import style from "./Favorites.module.scss";

export const Favorites = () => {
  const { state } = useAppState();
  const { favorites } = state;

  return (
    <main className={style.principal}>
      {favorites.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <ListOfGame games={favorites} />
      )}
    </main>
  );
};
