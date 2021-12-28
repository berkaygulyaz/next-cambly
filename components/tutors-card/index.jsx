import React, { useState } from "react";
import Container from "../container";
import Row from "../row";
import Col from "../col";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import avatar from "../../src/assets/img/avatar.png";

function tutorsCard({}) {
  return (
    <div className={styles.cardsWrapper}>
      <Container>
        <Row>
          <Col>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <Image
                    className={styles.headerAvatar}
                    src={avatar}
                    alt="profile avatar"
                    width={100}
                    height={100}
                  />

                  <div className={styles.cardheaderContent}>
                    <span className={styles.cardheaderTitle}>Tomas L</span>
                    <div className={styles.subHeader}>
                      <div className={styles.location}>
                        <Image
                          className={styles.badge}
                          src={avatar}
                          alt="badge"
                          width={32}
                          height={32}
                        />
                        Sivas, Türkiye
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardHeaderAction}>
                      Favori
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.contentText}>Architect- ESL teacher</p>
                </div>
                <div className={styles.cardBtnWrapper}>
                  <Link href="/">
                      <a className={styles.cardBtn}>PROFILE</a>
                  </Link>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default tutorsCard;
