import React, { FC, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";

import tesla from "../../images/tesla-s-big.png";
import TeslaHeader from "../../Components/TeslaHeader/TeslaHeader";
import styles from "./Battery.module.scss";

const Battery: FC = () => {
  const [isFullCharge, setFullCharge] = useState<boolean>(false);

  return (
    <>
      <main className={styles.wrapper}>
        <TeslaHeader />
        <section className={styles.battery}>
          <img
            className={styles.battery__tesla}
            src={tesla}
            alt='tesla-model-s'
          />
          <div className={styles.battery__content}>
            <div className={styles.battery__info}>
              <div className={styles.battery__header}>
                <p className={styles.battery__subtitle}>Range</p>
                <h1 className={styles.battery__title}>Go Anywhere</h1>
              </div>
              <p>
                With up to 405 miles of estimated range and access to the
                world’s largest and most powerful fast charging network, you’ll
                spend less time plugged in and more time on the road.
              </p>
            </div>
            <div className={styles.charge}>
              <div className={styles.charge_battery}>
                <p>100%</p>
                <div className={styles.charge__img}>
                  <div></div>
                  <div
                    className={
                      isFullCharge
                        ? styles.charge__icon__full
                        : styles.charge__icon
                    }
                  >
                    <BsFillLightningChargeFill size={60} />
                  </div>
                </div>
                <p>60min</p>
              </div>
              <div className={styles.charge__info}>
                <h1 className={styles.charge__title}>Power</h1>
                <p className={styles.charge__subtitle}>275kW</p>
                <p className={styles.charge__text}>0-100kph in 6 sec</p>
                <button
                  className={styles.charge__btn}
                  onClick={() => setFullCharge(!isFullCharge)}
                >
                  Battery Power
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Battery;
