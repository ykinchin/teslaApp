import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

const ErrorPage:FC = () => {
  return (
    <div className={styles.error}>
      <h1>404 Error</h1>
      <p>We couldn't find that page</p>
      <div>
        Let's try to find it on <Link to='/'>Home page</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
