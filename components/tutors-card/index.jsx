import React, { useEffect, useRef, useState } from "react";
import Container from "../container";
import Row from "../row";
import Col from "../col";
import Link from "next/link";
import styles from "./style.module.scss";
import shortid from "shortid";
import CamblyConstants from "../../src/constant/index";

function tutorsCard({ listTutor, btnName, fav }) {
  return (
    <div className={styles.cardsWrapper}>
      <Container>
        <Row>
          <Col>
            <div className={styles.cards}>
              {listTutor &&
                listTutor.map((tutor) => (
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
                              <div className={styles.infoCard}>
                                {tutor.chats}
                              </div>
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
                        onClick={() => fav(tutor)}
                      >
                        {btnName}
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
