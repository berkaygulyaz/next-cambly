import React from "react";
import styles from "./style.module.scss";

function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
