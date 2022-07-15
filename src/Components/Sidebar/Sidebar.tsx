import React, { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./Sidebar.module.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { MODELS_DATA } from "../../Pages/Models/MODELS_DATA";

const Sidebar: FC = () => {
  const models = MODELS_DATA;
  const [isToggleOpened, setIsToggleOpened] = useState<boolean>(false);

  return (
    <aside className={styles.sidebar}>
      <div
        className={
          isToggleOpened ? styles.sidebar__menu : styles.sidebar__menu__opened
        }
        onClick={() => console.log(isToggleOpened)}
      >
        <ul className={styles.sidebar_models}>
          {models.map((model) => (
            <li>
              <Link to={`/models/${model.modelName}`}>
                <img src={model.modelIcon} alt={model.iconAlt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          isToggleOpened ? styles.sidebar_toggle__opened : styles.sidebar_toggle
        }
        onClick={() => setIsToggleOpened(!isToggleOpened)}
      >
        {isToggleOpened ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineMenu size={25} />
        )}
        <img src={logo} alt='logo' />
      </div>
    </aside>
  );
};

export default Sidebar;
