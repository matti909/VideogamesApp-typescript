import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
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
            className={styles.inputt__in}
            type="search"
            name="valueSearch"
            id=""
            value={name}
            onChange={handleChange}
            placeholder="Buscar nombre ..."
          />
          <div className={styles.inputt__iconContainer}>
            <IoSearch className={styles.inputt__icon} />
          </div>
          <button className={styles.inputt__button}>Buscar</button>
        </div>
      </form>
    </div>
  );
};
