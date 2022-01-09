import React from "react";
import styles from "./style.module.scss";

function filter({handleKeyUp}) {
  return (
    <div className={styles.filterWrapper}>
      <input
        type="text"
        placeholder="Search Here..."
        className={styles.search}
        onKeyUp={(event) => handleKeyUp(event.target.value)}
      />
    </div>
  );
}

export default filter;
