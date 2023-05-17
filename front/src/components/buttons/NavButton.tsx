import React from 'react';
import styles from './NavButton.module.scss';

type Props = {};

const NavButton = (props: Props) => {
  return <button className={styles.button}>Click me</button>;
};

export default NavButton;
