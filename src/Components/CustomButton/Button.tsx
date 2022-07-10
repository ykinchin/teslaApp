import React, { FC } from "react";

import styles from './Button.module.scss'

interface Props {
  children: string;
  type :string
}

const Button: FC<Props> = ({ children, type }) => {
  return <button className={type==='white' ? styles.button__white : styles.button__black}>{children}</button>;
};

export default Button;
