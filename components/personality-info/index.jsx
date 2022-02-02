import React, { useState } from "react";
import styles from "./style.module.scss";

function Persoality({ about, language }) {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        <h3>About Me</h3>
        <p>{about}</p>
      </div>
      <div className={styles.list}>
        <h3>Language</h3>
        <p className={styles.language}>{language}</p>
      </div>
    </div>
  );
}

export default Persoality;
