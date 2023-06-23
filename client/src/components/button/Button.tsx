import React from "react";
import style from "./Button.module.scss";

type ButtonProps = {
  handleClick?: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = () => {
  return <button className={style.button}>Click me</button>;
};

export default Button;
