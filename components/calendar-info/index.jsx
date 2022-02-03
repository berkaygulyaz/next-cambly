import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import calendar from "../../src/assets/img/calendar.png";
import teacher from "../../src/assets/img/5a76f28a66029b0026708224s200.png";
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
    <div className={styles.calendar}>
      <div onClick={() => setIsMenuOpen(true)} className={styles.calendar_icon}>
        <Image src={calendar} alt="bell icon" width={20} height={20} />
      </div>

      {isMenuOpen && (
        <div className={styles.calendar_info} ref={ref}>
          <div className={styles.menu_title}>
            <p>Upcoming Lessons</p>
            <Link href="/">
              <a>open calendar</a>
            </Link>
          </div>
          <div className={styles.lesson_info}>
            <h3 className={styles.lesson_date}>
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
              <div className={styles.teacher_info}>
                <span>Tomas L</span>
                <p>5:00 PM - 5:30 PM</p>
              </div>
            </div>
          </div>
          <Link href="/">
            <a className={styles.schedule_btn}>+ Schedule A Lesson</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CalendarInfo;
