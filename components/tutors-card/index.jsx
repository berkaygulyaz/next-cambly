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
    <div class={styles.card_grid} key={shortid.generate()}>
      <div class={styles.card_grid_header}>
        <div class={styles.card_grid_img}>
          <img src={tutor.avatar} alt="Card image" className={styles.img} />
        </div>
        <div className={styles.card_grid_info}>
          <h4 class={styles.card_grid_title}>{tutor.name}</h4>
          <span className={styles.card_grid_location}>
            <img className={styles.card_grid_badge} src={tutor.badge} />
            {tutor.location}
          </span>
          <div className={styles.card_grid_certificate}>
            {tutor.chats && (
              <div className={styles.info_card}>{tutor.chats}</div>
            )}
            {tutor.teacher && (
              <div className={styles.info_card}>{tutor.teacher}</div>
            )}
          </div>
        </div>
        <div
          className={styles.card_fav_action}
          onClick={() => {
            onChildClick(tutor);
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? "Delete Favorite" : "Add Favorite"}
        </div>
      </div>
      <div className={styles.card_grid_body}>
        <p className={styles.card_grid_text}>{tutor.info}</p>
        <div className={styles.card_grid_btn_wrapper}>
          <button
            className={styles.card_grid_btn}
            onClick={() => router.push("/detail/" + tutor.id)}
          >
            PROFILE
          </button>
        </div>
      </div>
    </div>
  );
}

export default tutorsCard;
