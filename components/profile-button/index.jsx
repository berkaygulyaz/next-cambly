import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../src/assets/img/avatar.png";
function CalendarInfo() {
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  return (
    <div className={styles.profile}>
      <Image
        src={avatar}
        alt="profile avatar"
        width={40}
        height={40}
        onClick={() => setIsMenuOpen(true)}
      />
      {isMenuOpen && (
        <nav className={styles.settings_menu} ref={ref}>
          <Link href="/">
            <a className={styles.menu_item}> Subscription </a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}> Account Settings </a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}> Messages </a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}> Calendar </a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}> Free Minutes </a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}> Referral Code </a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}> Sign Out </a>
          </Link>
        </nav>
      )}
    </div>
  );
}

export default CalendarInfo;
