import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Col from "../col";
import Container from "../container";
import Row from "../row";
import Info from "../info-plan";
import FooterNav from "../footer-nav";
import CamblyConstants from "../../src/constant/index";

function footer({}) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_wrapper}>
          <FooterNav />
          <div className={styles.social_media}>
            {CamblyConstants.SOCIAL_MEDIA.map((item) => (
              <nav>
                <Link href={item.slug}>
                  <a>
                    {" "}
                    <img src={item.icon} />{" "}
                  </a>
                </Link>
              </nav>
            ))}
          </div>
          <span className={styles.copyright}>
            CAMBLY INC. © COPYRIGHT 2021. ALL RIGHTS RESERVED.
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default footer;
