import { ListOfGame } from "../../components/listOfGame/ListOfGame";
import { useAppState } from "../../context/useAppState";
import style from "./Favorites.module.scss";

export const Favorites = () => {
  const { state } = useAppState();
  const { favorites } = state;

  return (
    <main>
      {favorites.length === 0 ? (
        <div className={style.principal}>
          <p>No hay resultados</p>
        </div>
      ) : (
        <div className={style.contai}>
          <ListOfGame games={favorites} />
        </div>
      )}
    </main>
  );
};
