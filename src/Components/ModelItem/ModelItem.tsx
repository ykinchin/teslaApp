import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MODELS_DATA } from "../../Pages/Models/MODELS_DATA";
import { IModels } from "../../Types/types";
import Button from "../CustomButton/Button";

import styles from "./ModelItem.module.scss";

const ModelItem = () => {
  const { modelID } = useParams<string>();
  const [singleModel, setSingleModel] = useState<IModels[]>([]);

  const models = MODELS_DATA;
  useEffect(() => {
    setSingleModel(models?.filter((el) => el.modelName === modelID));
  }, [modelID, models]);

  return (
    <main className={styles.modelPage}>
      {singleModel?.map((model) => (
        <>
          <section className={styles.banner}>
            <img
              className={styles.banner__img}
              src={model.banner}
              alt={model.iconAlt}
            />
            <h1 className={styles.banner__title}>{model.modelName}</h1>
          </section>
          <section className={styles.params}>
            <div className={styles.params__wrapper}>
              <img
                className={styles.params__img}
                src={model.paramsIcon}
                alt={model.iconAlt}
              />
              <ul className={styles.params_info}>
                <li className={styles.params__title}>
                  <h2>{model.modelName} Specs</h2>
                </li>
                <li>
                  <b>Range </b>
                  <p>{model.params.range}</p>
                </li>
                <li>
                  <b>Battery</b>
                  <p>{model.params.battery}</p>
                </li>
                <li>
                  <b>Peak Power</b>
                  <p>{model.params.peakPower}</p>
                </li>
                <li>
                  <b>Top Speed</b>
                  <p>{model.params.topSpeed}</p>
                </li>
                <li>
                  <b>Weight</b>
                  <p>{model.params.weight}</p>
                </li>
                <li>
                  <b>Wheels</b>
                  <p>{model.params.wheels}</p>
                </li>
              </ul>
            </div>
            <Button type='white'>Order Now</Button>
          </section>
        </>
      ))}
    </main>
  );
};

export default ModelItem;
