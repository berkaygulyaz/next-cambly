import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import TutorsCard from "../components/tutors-card";
import FilterTop from "../components/filter-top";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
import styles from "../components/tutors-card/style.module.scss";

function Favorites() {
    const [favTutors, setFavTutors] = useState("");

    useEffect(() => {
      setFavTutors(JSON.parse(localStorage.getItem("tutor")));
    }, []);

  function clickAlert(data) {
    console.log(data);
  }
  return (
    <div>
      <Layout>
        <Banner />
        <FilterTop handleKeyUp={(value) => handleSearch(value)} />
        <div className={styles.cardsWrapper}>
          <Container>
            <Row>
              <Col>
                <div className={styles.cards}>
                  {favTutors &&
                    favTutors.map((tutor) => (
                      <TutorsCard
                        tutor={tutor}
                        favTutor={favTutors}
                        onChildClick={clickAlert}
                      />
                    ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
}

export default Favorites;
