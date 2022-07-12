import React, { FC } from "react";
import { IContent } from "../../Types/types";

import styles from "./CustomGrid.module.scss";
import GridElement from "./GridElement";

interface Props {
  content: IContent[];
}

const CustomGrid: FC<Props> = ({ content }) => {
  return (
    <div className={styles.grid}>
      {content.map((element) => (
        <GridElement
          text={element.text}
          title={element.title}
          imgSrc={element.imgSrc}
          imgAlt={element.imgAlt}
        />
      ))}
    </div>
  );
};

export default CustomGrid;
