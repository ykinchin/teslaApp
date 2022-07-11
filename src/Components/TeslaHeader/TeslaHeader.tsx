import React, { FC } from "react";

import styles from "./TeslaHeader.module.scss";
import header from "../../images/tesla.png";

const TeslaHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={header} alt='tesla' />
    </div>
  );
};

export default TeslaHeader;
