import React, { useState } from "react";
import styles from "./style.module.scss";

function Video({ video }) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        width="900"
        height="600"
        src="https://www.youtube.com/embed/9UMxZofMNbA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default Video;
