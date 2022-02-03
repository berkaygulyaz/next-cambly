import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import bell from "../../src/assets/img/bell.png";
import tick from "../../src/assets/img/tick.png";
import Image from "next/image";
function Notifications() {
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
    <div className={styles.notification}>
      <div onClick={() => setIsMenuOpen(true)} className={styles.bell}>
        <Image src={bell} alt="bell icon" width={20} height={20} />
      </div>
      {isMenuOpen && (
        <div className={styles.notification_info} ref={ref}>
          <Image src={tick} alt="tick icon" width={85} height={85} />
          <div className={styles.notification_text}>
            <span>You're all caught up!</span>
            <p>No new notifications</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
