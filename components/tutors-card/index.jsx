import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import shortid from "shortid";

function tutorsCard({ tutor }) {
  const [text, setText] = useState("Add Favorites");
  const [favTutors, setFavTutors] = useState("");

  useEffect(() => {
    setFavTutors(JSON.parse(localStorage.getItem("tutor")));
  }, []);

  const addTutor = (t) => {
    if (localStorage.getItem("tutor") == null) {
      localStorage.setItem("tutor", "[]");
    }

    var oldTutorData = JSON.parse(localStorage.getItem("tutor"));
    oldTutorData.push(t);
    localStorage.setItem("tutor", JSON.stringify(oldTutorData));
  };

  const delTutor = (t) => {
    var oldTutorData = JSON.parse(localStorage.getItem("tutor"));

    localStorage.setItem(
      "tutor",
      JSON.stringify(oldTutorData.filter((e) => e.id !== t.id))
    );
    setFavTutors(JSON.parse(localStorage.getItem("tutor")));
  };

  const funcWrapper = (val) => {
    if (text == "Delete Favorites") {
      setText("Add Favorites");
      delTutor(val);
    } else {
      setText("Delete Favorites");
      addTutor(val);
    }
  };

  useEffect(() => {
    // Localstorage'da data var mı kontrol et. Varsa delete favorite yap
  });

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
          onClick={() => funcWrapper(tutor)}
        >
          {text}
        </div>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.contentText}>{tutor.info}</p>
      </div>
      <div className={styles.cardBtnWrapper}>
        <Link href="/">
          <a className={styles.cardBtn}>PROFILE</a>
        </Link>
      </div>
    </div>
  );
}

export default tutorsCard;
