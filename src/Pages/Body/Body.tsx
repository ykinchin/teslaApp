import React, { FC } from "react";

import styles from "./Body.module.scss";
import side from "../../images/side.png";
import safety from "../../images/safety.png";
import Button from "../../Components/CustomButton/Button";
import CustomGrid from "../../Components/CustomGrid/CustomGrid";
import { BODY_DATA } from "./BODY_DATA";

const Body: FC = () => {
  const bodyContent = BODY_DATA;

  return (
    <main className={styles.body}>
      <section className={styles.front}>
        <h1 className={styles.front__title}>NEXT ERA OF MOBILITY</h1>
      </section>
      <section className={styles.sides}>
        <div className={styles.sides__info}>
          <div className={styles.order}>
            <div className={styles.order__header}>
              <h2 className={styles.order__title}>Exterier</h2>
              <p>Designed for Efficiency</p>
            </div>
            <Button type='white'>Order Now</Button>
          </div>
          <img className={styles.sides__img} src={side} alt='tesla side view' />
          <p className={styles.sides__text}>
            With a drag coefficient of just .208 Cd, the lowest on the planet,
            Model S is built for speed, endurance and range. Improved
            aerodynamics and a wider chassis offer more responsive performance
            so you can take corners quicker and with more confidence.
          </p>
        </div>
      </section>
      <section className={styles.overview}>
        <CustomGrid content={bodyContent} />
      </section>
      <section className={styles.safety}>
        <div className={styles.safety__info}>
          <div className={styles.safety__header}>
            <p className={styles.safety__title}>Safety</p>
            <p className={styles.safety__subtitle}>High Impact Protection</p>
          </div>
          <p>
            Model S is built from the ground up as an electric vehicle, with a
            high-strength architecture and floor-mounted battery pack for
            incredible occupant protection and low rollover risk. Every new
            Model S includes Tesla’s latest active safety features, such as
            Automatic Emergency Braking, at no extra cost.
          </p>
        </div>
        <img src={safety} alt='safe' />
      </section>
    </main>
  );
};

export default Body;
