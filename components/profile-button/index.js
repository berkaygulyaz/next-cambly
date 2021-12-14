import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../src/assets/img/avatar.png";
function CalendarInfo() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <div className={styles.profile}>
      <Image
        onClick={toggle}
        src={avatar}
        alt="profile avatar"
        width={40}
        height={40}
      />

      <nav
        className={styles.settingsMenu}
        style={{
          display: show ? "flex" : "none",
        }}
      >
        <Link href="/">
          <a className={styles.menuItem}> Subscription </a>
        </Link>
        <Link href="/">
          <a className={styles.menuItem}> Account Settings </a>
        </Link>
        <Link href="/">
          <a className={styles.menuItem}> Messages </a>
        </Link>
        <Link href="/">
          <a className={styles.menuItem}> Calendar </a>
        </Link>
        <Link href="/">
          <a className={styles.menuItem}> Free Minutes </a>
        </Link>
        <Link href="/">
          <a className={styles.menuItem}> Referral Code </a>
        </Link>
        <Link href="/">
          <a className={styles.menuItem}> Sign Out </a>
        </Link>
      </nav>
    </div>
  );
}

export default CalendarInfo;
