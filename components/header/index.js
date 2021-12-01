import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import Col from "../col";
import ContainerFluid from "../container-fluid";
import Row from "../row";
import Logo from "../../src/assets/img/primary.png";
import Info from "../info-plan";

function Header({}) {
  return (
    <header className={styles.header}>
      <ContainerFluid>
        <Row>
          <Col>
            <div className={styles.headerWrapper}>
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
              <nav className={styles.navbar}> 
                <Link href="/tutors">
                  <a>TUTORS</a>
                </Link>
                <Link href="/courses">
                  <a>COURSES</a>
                </Link>
                <Link href="/history">
                  <a>PROGRESS</a>
                </Link>
              </nav>
              <Info />
            </div>
          </Col>
        </Row>
      </ContainerFluid>
    </header>
  );
}

export default Header;
