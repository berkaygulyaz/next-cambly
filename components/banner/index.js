import React, { useState } from "react";
import Container from "../container";
import Row from "../row";
import Col from "../col";
import styles from "./style.module.scss";

function Banner({}) {

  return (
    <div className={styles.banner}>
        <Container>
            <Row>
                <Col>
                    <h2 className={styles.bannerTitle}>Welcome Back, Berkay</h2>
                    <div className={styles.wordMap}></div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Banner;
