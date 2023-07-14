import React from "react";
import styles from "./CardConteiner.module.scss";
import { IGame } from "../../interfaces/videogames.interface";
import { useAppState } from "../../context/useAppState";
import { Link } from "react-router-dom";

export const CardConteiner: React.FC<IGame> = ({
  name,
  id,
  background_image,
  genres,
  rating,
}) => {
  const genre = genres.map((e) => e);

  const { actions, state } = useAppState();
  const { toggleFavorites } = actions;
  const { favorites } = state;

  const isFavorites = favorites.includes(name);

  return (
    <div className={styles.cardContainer}>
      <div style={{ position: "relative" }}>
        <img
          style={{ objectFit: "cover" }}
          src={background_image}
          alt="unknown"
          loading="lazy"
        />
        <button
          onClick={() => toggleFavorites(name)}
          className={`${isFavorites ? styles.favoriteButton : ""}`}
          style={{
            position: "absolute",
            right: 4,
            bottom: 18,
            boxShadow: "0 0 0 1px rgba(0, 0, 0, .1)",
            color: isFavorites ? "#ff9800" : "#bdbdbd",
            backgroundColor: "transparent",
            border: "1px solid #ccc",
            padding: "2px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isFavorites ? "★" : "☆"}
        </button>
      </div>
      <Link
        style={{
          color: "initial",
          textDecoration: "none",
        }}
        to={`/detail/${id}`}
      >
        <h2>
          <p>{name.toUpperCase()}</p>
        </h2>
        {<p>Generos: {genre.join(", ")}</p>}
        <p>
          Rating:{" "}
          <span className={styles.ratingStars}>
            {"★".repeat(rating).padEnd(5, "☆")}
          </span>
        </p>
      </Link>
    </div>
  );
};
