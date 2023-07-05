import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  const [name, setName] = React.useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search", {
      state: name.trim().toLowerCase(),
    });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div className={styles.inputt}>
          <input
            type="search"
            name="valueSearch"
            id=""
            value={name}
            onChange={handleChange}
            placeholder="Buscar nombre ..."
          />
        </div>

        <button className="btn-search">Buscar</button>
      </form>
    </div>
  );
};
