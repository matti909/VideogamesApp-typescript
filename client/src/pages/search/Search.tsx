import { useLocation } from "react-router-dom";

import { ListOfGame } from "../../components/listOfGame/ListOfGame";
import { useAppState } from "../../context/useAppState";

export const Search = () => {
  const { state } = useAppState();
  const { allVideogames } = state;

  const location = useLocation();

  const filteredGames = allVideogames.filter((game) =>
    game.name.includes(location.state)
  );

  return <ListOfGame games={filteredGames} />;
};
