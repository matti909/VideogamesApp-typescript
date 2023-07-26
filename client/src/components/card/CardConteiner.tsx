import React, { useCallback } from "react";
import styles from "./CardConteiner.module.scss";
import { IGame } from "../../interfaces/videogames.interface";
import { useAppState } from "../../context/useAppState";
import { Link } from "react-router-dom";

export const CardConteiner: React.FC<IGame> = React.memo((game) => {
  const { actions, state } = useAppState();
  const { toggleFavorites } = actions;
  const { favorites } = state;

  const isFavorites = favorites.some((favorite) => favorite.id === game.id);

  const handleToggleFavorites = useCallback(() => {
    toggleFavorites(game);
  }, [toggleFavorites, game]);

  return (
    <div className={styles.cardContainer}>
      <div style={{ position: "relative" }}>
        <img
          style={{ objectFit: "cover" }}
          src={game.background_image}
          alt="unknown"
          loading="lazy"
        />
        <button
          onClick={handleToggleFavorites}
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
        to={`/detail/${game.id}`}
      >
        <h2>
          <p>{game.name.toUpperCase()}</p>
        </h2>
        <div className={styles.carType}>
          {game.genres.slice(0, 3).map((genre) => (
            <span
              key={genre.toString()}
              className={`${styles.genre} ${styles[genre.toString()]}`}
            >
              {genre.toString().toUpperCase()}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
});
