import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Button from "../button/Button";
import { SearchBar } from "../searchBar/SearchBar";

export const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((prev) => !prev);

  const handleClick = () => {
    navigate("/form", {});
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>GAME___PLAY</span>
        </div>

        <div>
          <SearchBar />
        </div>

        <div>
          <div className={styles.desktop__button__container}>
            <nav
              className={`${styles.nav} ${menuOpen ? styles["nav--open"] : ""}`}
            >
              <Link className={styles.nav__item} to="/">
                INICIO
              </Link>
              <Link className={styles.nav__item} to="/">
                FAVORITOS
              </Link>
              <Link className={styles.nav__item} to="/">
                ABOUT
              </Link>
              <div className={styles.mobile__button__container}>
                <Button onClick={handleClick} />
              </div>
            </nav>
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};
