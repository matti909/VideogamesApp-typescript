import { BASEURL } from "../../service/makeReq";
import { Game } from "./Form";

export const gameRequest = async (game: Game) => {
  try {
    const response = await fetch(`${BASEURL}/games`, {
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
