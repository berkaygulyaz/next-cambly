import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import shortid from "shortid";

function tutorsCard({ tutor, onChildClick }) {
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);

  const changeText = (data) => {
    let storageTutor = JSON.parse(localStorage.getItem("tutor"));

    if (storageTutor !== null) {
      const tutor = storageTutor.filter((e) => e.id == data.id);

      if (tutor.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  };

  useEffect(() => {
    changeText(tutor);
  }, []);

  return (
    <div className={styles.card} key={shortid.generate()}>
      <div className={styles.cardHeader}>
        <img className={styles.headerAvatar} src={tutor.avatar} />

        <div className={styles.cardheaderContent}>
          <span className={styles.cardheaderTitle}>{tutor.name}</span>
          <div className={styles.subHeader}>
            <div className={styles.location}>
              <img className={styles.badge} src={tutor.badge} />
              {tutor.location}
            </div>
            <div className={styles.tutorsSpecialInfo}>
              {tutor.chats && (
                <div className={styles.infoCard}>{tutor.chats}</div>
              )}
              {tutor.teacher && (
                <div className={styles.infoCard}>{tutor.teacher}</div>
              )}
            </div>
          </div>
        </div>
        <div
          className={styles.cardHeaderAction}
          onClick={() => {
            onChildClick(tutor);
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? "Delete Favorite" : "Add Favorite"}
        </div>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.contentText}>{tutor.info}</p>
      </div>
      <div className={styles.cardBtnWrapper}>
        <button
          className={styles.cardBtn}
          onClick={() => router.push("/detail/" + tutor.id)}
        >
          PROFILE
        </button>
      </div>
    </div>
  );
}

export default tutorsCard;