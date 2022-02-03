import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Container from "../container";
import Row from "../row";
import Col from "../col";
import Link from "next/link";
import classNames from "classnames";

function FilterTop({ handleKeyUp, status }) {
  return (
    <div className={styles.filter_top}>
      <div className={styles.tutors_tab}>
        <p>Find a Tutor</p>
        <div className={styles.search_tutor_tab}>
          <Link href="/">
            <a
              className={classNames({
                [styles.active]: status === "homepage",
              })}
            >
              All
            </a>
          </Link>
          <Link href="/favorites">
            <a
              className={classNames({
                [styles.active]: status === "favorite",
              })}
            >
              Favorites
            </a>
          </Link>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search Tutor Name..."
        className={styles.search}
        onKeyUp={(event) => handleKeyUp(event.target.value)}
      />
    </div>
  );
}

export default FilterTop;
