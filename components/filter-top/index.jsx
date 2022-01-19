import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import CamblyConstants from "../../src/constant/index";
import shortid from "shortid";

function FilterTop({ handleKeyUp }) {
  return (
    <div className={styles.filterTopWrapper}>
      <div className={styles.filterTop}>
        <div className={styles.tutorsTab}>
          <p>Find a Tutor</p>
          <div className={styles.searchTutorTab}>
            <button>All</button>
            <button>Favorites</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search Here..."
          className={styles.search}
          onKeyUp={(event) => handleKeyUp(event.target.value)}
        />
      </div>
    </div>
  );
}

export default FilterTop;
