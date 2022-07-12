import React, { FC } from "react";
import { IContent } from "../../Types/types";

import styles from "./CustomGrid.module.scss";

const GridElement: FC<IContent> = ({ text, title, imgSrc, imgAlt }) => {
  return (
    <div className={styles.grid_container}>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default GridElement;
