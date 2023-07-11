import { Game } from "./Form";

const API = "http://localhost:4002";

export const gameRequest = (game: Game) =>
  fetch(`${API}/form`, {
    method: "POST",
    body: JSON.stringify(game),
    headers: {
      "Content-type": "application/json",
    },
  });
