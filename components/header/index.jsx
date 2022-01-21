import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import Col from "../col";
import ContainerFluid from "../container-fluid";
import Row from "../row";
import Logo from "../../src/assets/img/primary.png";
import Info from "../info-plan";
import Nav from "../header-nav";
import Notifications from "../notifications";
import CalendarInfo from "../calendar-info";
import ProfileButton from "../profile-button";

function Header({}) {
  return (
    <header className={styles.header}>
      <ContainerFluid>
        <Row>
          <Col>
            <div className={styles.headerWrapper}>
              <div className={styles.leftSide}>
                <Link href="/">
                  <a className="logo">
                    <Image
                      src={Logo}
                      alt="Cambly Logo"
                      width={140}
                      height={40}
                    />
                  </a>
                </Link>
                <Nav />
              </div>
              <div className={styles.rightSide}>
                <Info />
                <Notifications />
                <CalendarInfo />
                <ProfileButton />
              </div>
            </div>
          </Col>
        </Row>
      </ContainerFluid>
    </header>
  );
}

export default Header;
