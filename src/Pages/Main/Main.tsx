import React, { FC } from "react";
import styles from "./main.module.scss";

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
