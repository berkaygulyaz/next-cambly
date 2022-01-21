import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import CamblyConstants from "../../src/constant/index";
import shortid from "shortid";
import Container from "../container";
import Row from "../row";
import Col from "../col";

function FilterTop({ handleKeyUp }) {
  return (
    <div className={styles.filterTopWrapper}>
      <Container>
        <Row>
          <Col>
            <div className={styles.filterTop}>
              <div className={styles.tutorsTab}>
                <p>Find a Tutor</p>
                <div className={styles.searchTutorTab}>
                  <button>All</button>
                  <button>Favorites</button>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search Here..."
                className={styles.search}
                onKeyUp={(event) => handleKeyUp(event.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FilterTop;
