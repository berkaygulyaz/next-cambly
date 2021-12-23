import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link href="/tutors">
        <a>TUTORS</a>
      </Link>
      <Link href="/courses">
        <a>COURSES</a>
      </Link>
      <Link href="/history">
        <a>PROGRESS</a>
      </Link>
    </nav>
  );
}

export default Nav;
