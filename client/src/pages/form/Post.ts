import { Game } from "./Form";

const API = "http://localhost:4002";

export const gameRequest = async (game: Game) => {
  try {
    const response = await fetch(`${API}/games`, {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al enviar la solicitud");
    }

    return response.json();
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
    throw error;
  }
};
