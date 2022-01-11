import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import arrow from "../../src/assets/img/arrow-bottom.png";
import Link from "next/link";

function Info({}) {
  const [show, setShow] = useState(false);

  function handleButtonClick() {
    setShow(!show);
  }

  return (
    <div className={styles.studentPlanInfo}>
      <div className={styles.shortInfo}>
        <span className={styles.timeInfo}>7:12 PM Dec 1</span>
        <span className={styles.lessonMinuteInfo}>30 Minutes</span>
        <div className={styles.lessonSuccessDot}>
          <button className={styles.lessonDot}></button>
          <button className={styles.lessonDot}></button>
        </div>
      </div>
      <div className={styles.arrow} onClick={handleButtonClick}>
        <Image src={arrow} alt="arrow bottom" height={8} width={10} />
      </div>

      <div
        className={styles.infoMenu}
        style={{
          display: show ? "block" : "none",
        }}
      >
        <div className={styles.infoCard}>
          <span className={styles.cardTitle}>Today's Minutes</span>
          <h3 className={styles.leftMinutes}>30 minutes left</h3>
          <span className={styles.border}></span>
          <span className={styles.statusText}>7 hours until daily reset at 3:00 AM +03</span>
          <span className={styles.statusText}>Week resets Monday Dec 6, 2021 3:00 AM</span>
        </div>
        <div className={styles.infoCard}>
          <span className={styles.cardTitle}>Current Plan</span>
          <span className={styles.statusText}>Renews Tuesday August 23, 2022</span>
          <div className={styles.yourPlan}>
              <span className={styles.planTime}>Year</span>
              <span className={styles.planStatus}>30 miutes x 2 days</span>
              <Link href="/">
                <a className={styles.changeBtn}>change</a>
              </Link>
          </div>
        </div>
        <div className={styles.infoCard}>
          <span className={styles.cardTitle}>Anytime Minutes</span>
          <span className={styles.statusText}>Spend extra time with your favorite tutors</span>
          <Link href="/">
              <a className={styles.buyTimes}>BUY ANYTIME MINUTES</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
