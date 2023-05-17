import { useState } from 'react';
import styles from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import React from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((prev) => !prev);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>GAME___PLAY</span>
        </div>
        <div>
          <nav className={`${styles.nav} ${menuOpen ? styles['nav--open'] : ''}`}>
            <a className={styles.nav__item} href="/">
              INICIO
            </a>
            <a className={styles.nav__item} href="/">
              FAVORITOS
            </a>
            <a className={styles.nav__item} href="/">
              ABOUT
            </a>
            <div className={styles.mobile__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.desktop__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className={styles.button}>Click me</button>;
};

export default Header;
