import React, { FC } from "react";

import styles from './Interior.module.scss'
import Slider from "../../Components/Slider/Slider";
import CustomGrid from "../../Components/CustomGrid/CustomGrid";
import { INTERIOR_DATA } from "./INTERIOR_DATA";

const Interior: FC = () => {
const interiorContent = INTERIOR_DATA;

  return (
    <main className={styles.wrapper}>
      <Slider />
      <section className={styles.interior}>
        <CustomGrid content={interiorContent}/>
      </section>
    </main>
  );
};

export default Interior;
