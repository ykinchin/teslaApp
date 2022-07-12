import React, { FC, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import styles from "./Slider.module.scss";
import { SLIDER_DATA } from "./SLIDER_DATA";

const Slider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const nextSlide = () => {
    if (currentSlide !== SLIDER_DATA.length) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === SLIDER_DATA.length) {
      setCurrentSlide(1);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== 1) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 1) {
      setCurrentSlide(SLIDER_DATA.length);
    }
  };

  return (
    <div className={styles.slider}>
      {SLIDER_DATA.map((obj, index) => {
        return (
          <div
            key={index}
            className={
              currentSlide === index + 1 ? styles.slide__active : styles.slide
            }
          >
            <img src={obj.imageSrc} alt={obj.imgAlt} />
          </div>
        );
      })}
      <button onClick={nextSlide} className={styles.slide__next}>
        <AiOutlineArrowLeft size={35} />
      </button>
      <button onClick={prevSlide} className={styles.slide__prev}>
        <AiOutlineArrowRight size={35} />
      </button>
    </div>
  );
};

export default Slider;
