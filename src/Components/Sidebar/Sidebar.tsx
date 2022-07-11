import React, { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./Sidebar.module.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import models from "../../images/model-s.png";
import modely from "../../images/model-y.png";
import modelx from "../../images/model-x.png";
import model3 from "../../images/model-3.png";

const Sidebar: FC = () => {
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
          <li>
            <Link to=''>
              <img src={model3} alt='' />
            </Link>
          </li>
          <li>
            <Link to=''>
              <img src={modely} alt='' />
            </Link>
          </li>
          <li>
            <Link to=''>
              <img src={modelx} alt='' color='white' />
            </Link>
          </li>
          <li>
            <Link to=''>
              <img src={models} alt='' />
            </Link>
          </li>
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
