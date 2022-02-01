import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import TutorsCard from "../components/tutors-card";
import FilterTop from "../components/filter-top";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
import setFavorite from "../src/helpers/setFavorite";
import styles from "../src/assets/common/style.module.scss";
import CamblyConstants from "../src/constant/index";

function Favorites() {
  const [favTutors, setFavTutors] = useState("");

  useEffect(() => {
    setFavTutors(JSON.parse(localStorage.getItem("tutor")));
  }, []);
  const handleSearch = (e) => {
    const tutorData = JSON.parse(localStorage.getItem("tutor"));
    setFavTutors(tutorData.filter((t) => t.name.toLowerCase().includes(e)));
  };

  return (
    <div>
      <Layout>
        <section className={styles.banner}>
          <Container>
            <Row>
              <Col>
                <Banner />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.filterTopWrapper}>
          <Container>
            <Row>
              <Col>
                <FilterTop
                  handleKeyUp={(value) => handleSearch(value)}
                  status="favorite"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.cardsWrapper}>
          <Container>
            <Row>
              <Col>
                <div className={styles.cards}>
                  {favTutors &&
                    favTutors.map((tutor) => (
                      <TutorsCard
                        tutor={tutor}
                        favTutor={favTutors}
                        onChildClick={setFavorite}
                      />
                    ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
}

export default Favorites;
