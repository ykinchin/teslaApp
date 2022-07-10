import React from "react";

import styles from "./TeslaHeader.module.scss";
import header from "../../images/tesla.png";

const TeslaHeader = () => {
  return (
    <div className={styles.wrapper}>
      <img src={header} alt='tesla' />;
    </div>
  );
};

export default TeslaHeader;
