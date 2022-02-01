import React from "react";
import styles from "./style.module.scss";

function detailHeader({ name, badge, location, avatar }) {
  return (
    <div className={styles.tutorInfo}>
      <img className={styles.avatar} src={avatar} />
      <div className={styles.tutorInfoDetail}>
        <h5>{name}</h5>
        <div className={styles.location}>
          <img className={styles.badge} src={badge} />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default detailHeader;
