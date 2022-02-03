import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import arrow from "../../src/assets/img/arrow-bottom.png";
import Link from "next/link";

function Info({}) {
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
    <div className={styles.student_plan_info}>
      <div className={styles.short_info}>
        <span className={styles.time_info}>7:12 PM Dec 1</span>
        <span className={styles.lesson_minute_info}>30 Minutes</span>
        <div className={styles.lesson_success_dot}>
          <button className={styles.lesson_dot}></button>
          <button className={styles.lesson_dot}></button>
        </div>
      </div>
      <div className={styles.arrow} onClick={() => setIsMenuOpen(true)}>
        <Image src={arrow} alt="arrow bottom" height={8} width={10} />
      </div>

      {isMenuOpen && (
        <div className={styles.info_menu} ref={ref}>
          <div className={styles.info_card}>
            <span className={styles.card_title}>Today's Minutes</span>
            <h3 className={styles.left_minutes}>30 minutes left</h3>
            <span className={styles.border}></span>
            <span className={styles.status_text}>
              7 hours until daily reset at 3:00 AM +03
            </span>
            <span className={styles.status_text}>
              Week resets Monday Dec 6, 2021 3:00 AM
            </span>
          </div>
          <div className={styles.info_card}>
            <span className={styles.card_title}>Current Plan</span>
            <span className={styles.status_text}>
              Renews Tuesday August 23, 2022
            </span>
            <div className={styles.your_plan}>
              <span className={styles.plan_time}>Year</span>
              <span className={styles.plan_status}>30 miutes x 2 days</span>
              <Link href="/">
                <a className={styles.change_btn}>change</a>
              </Link>
            </div>
          </div>
          <div className={styles.info_card}>
            <span className={styles.card_title}>Anytime Minutes</span>
            <span className={styles.status_text}>
              Spend extra time with your favorite tutors
            </span>
            <Link href="/">
              <a className={styles.buy_times}>BUY ANYTIME MINUTES</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
