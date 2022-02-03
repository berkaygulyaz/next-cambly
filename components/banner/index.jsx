import React, { useState } from "react";
import styles from "./style.module.scss";

function Banner({}) {
  return (
    <>
      <h2 className={styles.banner_title}>Welcome Back, Berkay</h2>
      <div className={styles.word_map}></div>
    </>
  );
}

export default Banner;
