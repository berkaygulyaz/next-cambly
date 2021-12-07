import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import calendar from "../../src/assets/img/calendar.png";
import teacher from "../../src/assets/img/5a76f28a66029b0026708224s200.png";
function CalendarInfo() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }
  return (
    <div className={styles.calendar}>
      <div onClick={toggle} className={styles.calendarIcon}>
        <Image src={calendar} alt="bell icon" width={20} height={20} />
      </div>

      <div
        className={styles.calendarInfo}
        style={{
          display: show ? "flex" : "none",
        }}
      >
        <div className={styles.menuTitle}>
          <p>Upcoming Lessons</p>
          <Link href="/">
            <a>open calendar</a>
          </Link>
        </div>
        <div className={styles.lessonInfo}>
          <h3 className={styles.lessonDate}>
            8
            <br />
            <small>Wed</small>
          </h3>
          <div className={styles.lesson}>
            <Image
              src={teacher}
              className={styles.image}
              alt="arrow bottom"
              height={40}
              width={40}
            />
            <div className={styles.teacherInfo}>
              <span>Tomas L</span>
              <p>5:00 PM - 5:30 PM</p>
            </div>
          </div>
        </div>
        <div className={styles.lessonInfo}>
          <h3 className={styles.lessonDate}>
            8
            <br />
            <small>Wed</small>
          </h3>
          <div className={styles.lesson}>
            <Image
              src={teacher}
              className={styles.image}
              alt="arrow bottom"
              height={40}
              width={40}
            />
            <div className={styles.teacherInfo}>
              <span>Tomas L</span>
              <p>5:00 PM - 5:30 PM</p>
            </div>
          </div>
        </div>
        <Link href="/">
          <a className={styles.scheduleBtn}>+ Schedule A Lesson</a>
        </Link>
      </div>
    </div>
  );
}

export default CalendarInfo;
