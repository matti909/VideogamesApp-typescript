import { AiOutlineCloseSquare } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";
import styles from "./Header.module.scss";
import React from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/" className={styles.header__content__logo}>
          GAME__PLAY
        </Link>

        <SearchBar />

        <nav
          className={`${styles.header__content__nav} ${
            menuOpen ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/favorites">FAVORITOS</Link>
            </li>
            <li>
              <Link to="/form">CREAR</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.header__content__toggle}>
          {menuOpen ? (
            <AiOutlineCloseSquare onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};
