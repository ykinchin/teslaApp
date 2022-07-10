import React, { FC } from "react";

import styles from "./Range.module.scss";
import model3 from "../../images/tesla-3-big.png";
import TeslaHeader from "../../Components/TeslaHeader/TeslaHeader";
import { Link } from "react-router-dom";

const Range: FC = () => {
  return (
    <>
      <TeslaHeader />
      <main className={styles.range}>
        <div className={styles.range_graph}>
          <img className={styles.range__img} src={model3} alt='tesla-model-3' />
        </div>
        <div className={styles.range_content}>
          <div className={styles.range__header}>
            <h1 className={styles.range__title}>Electric Range</h1>
            <h2 className={styles.range__subtitle}>535-600 km</h2>
          </div>
          <p className={styles.range__info}>
            Model S platforms unite powertrain and battery technologies for
            unrivaled performance, range and efficiency. New module and pack
            thermal architecture allows faster charging and gives you more power
            and endurance in all conditions.
          </p>
          <Link to='/battery'>
            <button className={styles.range__btn}>Battery Power</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Range;
