import { useContext } from "react";
import { AppStateContext } from "./AppContext";

export const useAppState = () => {
  return useContext(AppStateContext);
};
