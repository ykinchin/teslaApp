import React, { FC } from "react";

import styles from "./Body.module.scss";
import side from "../../images/side.png";
import overview1 from "../../images/overview-1.png";
import overview2 from "../../images/overview-2.png";
import overview3 from "../../images/overview-3.png";
import safety from "../../images/safety.png";
import Button from "../../Components/CustomButton/Button";

const Body: FC = () => {
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
        <div className={styles.overview__wrapper}>
          <div className={styles.overview__block}>
            <p>Relentless Performance</p>
            <p>
              Staggered, performance wheels and tires keep the car planted and
              help transfer maximum power down to the road.
            </p>
          </div>
          <img src={overview1} alt='tesla' />
          <img src={overview2} alt='tesla' />
          <div className={styles.overview__block}>
            <p>Optimized Aerodynamics</p>
            <p>
              Attention to detail on all exterior surfaces makes Model S the
              most aerodynamic production car on Earth.
            </p>
          </div>
          <div className={styles.overview__block}>
            <p>Refined Styling</p>
            <p>An iconic silhouette meets refreshed, elegant proportions.</p>
          </div>
          <img src={overview3} alt='tesla' />
        </div>
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
