import React, { useEffect, useRef, useState } from "react";
import Container from "../container";
import Row from "../row";
import Col from "../col";
import Link from "next/link";
import styles from "./style.module.scss";
import shortid from "shortid";

function tutorsCard({ data, all }) {
  const [mapTutor, setMapTutor] = useState(all);

  useEffect(() => {
    if (data == "") {
      setMapTutor(all);
    } else {
      setMapTutor(data);
    }
  });

  const addFavorites = (t) => {
    var newTutorData = t;

    if (localStorage.getItem("tutor") == null) {
      localStorage.setItem("tutor", "[]");
    }

    var oldTutorData = JSON.parse(localStorage.getItem("tutor"));
    oldTutorData.push(newTutorData);

    localStorage.setItem("tutor", JSON.stringify(oldTutorData));
  };

  return (
    <div className={styles.cardsWrapper}>
      <Container>
        <Row>
          <Col>
            <div className={styles.cards}>
              {mapTutor.map((tutor) => (
                <div className={styles.card} key={shortid.generate()}>
                  <div className={styles.cardHeader}>
                    <img className={styles.headerAvatar} src={tutor.avatar} />

                    <div className={styles.cardheaderContent}>
                      <span className={styles.cardheaderTitle}>
                        {tutor.name}
                      </span>
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
                            <div className={styles.infoCard}>
                              {tutor.teacher}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.cardHeaderAction}
                      onClick={() => addFavorites(tutor)}
                    >
                      Favori
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
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default tutorsCard;
