import React, { useState } from "react";
import Container from "../container";
import Row from "../row";
import Col from "../col";
import styles from "./style.module.scss";

function Banner({}) {
  return (
    <>
      <h2 className={styles.bannerTitle}>Welcome Back, Berkay</h2>
      <div className={styles.wordMap}></div>
    </>
  );
}

export default Banner;
