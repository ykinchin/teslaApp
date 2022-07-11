import React, { FC } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <nav className={styles.navbar}>
        <Link to='/'>Home</Link>
        <Link to='/series'>Series-s</Link>
        <Link to='/range'>Range</Link>
        <Link to='/battery'>Battery</Link>
        <Link to='/body'>Body</Link>
        <Link to='/interior'>Interior</Link>
        <Link to='/launch'>Launch</Link>
      </nav>
    </header>
  );
};

export default Navigation;
