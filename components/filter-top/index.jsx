import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Container from "../container";
import Row from "../row";
import Col from "../col";
import Link from "next/link";

function FilterTop({ handleKeyUp }) {
  return (
    <div className={styles.filterTop}>
      <div className={styles.tutorsTab}>
        <p>Find a Tutor</p>
        <div className={styles.searchTutorTab}>
          <Link href="/">
            <a>All</a>
          </Link>
          <Link href="/favorites">
            <a>Favorites</a>
          </Link>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Here..."
        className={styles.search}
        onKeyUp={(event) => handleKeyUp(event.target.value)}
      />
    </div>
  );
}

export default FilterTop;
