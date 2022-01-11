import React, { useState } from "react";
import styles from "./style.module.scss";
import bell from "../../src/assets/img/bell.png";
import tick from "../../src/assets/img/tick.png";
import Image from "next/image";
function Notifications() {
  const [show, setShow] = useState(false);

  function handleButtonClick() {
    setShow(!show);
  }
  return (
    <div className={styles.notification}>
      <div onClick={handleButtonClick} className={styles.bell}>
        <Image src={bell} alt="bell icon" width={20} height={20} />
      </div>
      <div
        className={styles.notificationInfo}
        style={{
          display: show ? "flex" : "none",
        }}
      >
        <Image src={tick} alt="tick icon" width={85} height={85} />
        <div className={styles.notificationText}>
          <span>You're all caught up!</span>
          <p>No new notifications</p>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
