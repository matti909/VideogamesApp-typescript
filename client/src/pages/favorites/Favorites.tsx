import React from "react";
import { ListOfGame } from "../../components/listOfGame/ListOfGame";
import { useAppState } from "../../context/useAppState";
import { IGame } from "../../interfaces/videogames.interface";

export const Favorites: React.FC<IGame> = () => {
  const { state } = useAppState();
  const { favorites } = state;

  return <ListOfGame games={favorites} />;
};
