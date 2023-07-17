import { ListOfGame } from "../../components/listOfGame/ListOfGame";
import { useAppState } from "../../context/useAppState";

export const Favorites = () => {
  const { state } = useAppState();
  const { favorites } = state;

  return <ListOfGame games={favorites} />;
};
