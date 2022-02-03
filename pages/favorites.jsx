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
    <Layout>
      <main>
        <section className={styles.banner}>
          <Container>
            <Banner />
          </Container>
        </section>
        <section className={styles.filterTopWrapper}>
          <Container>
            <FilterTop
              handleKeyUp={(value) => handleSearch(value)}
              status="favorite"
            />
          </Container>
        </section>
        <section className={styles.cardsWrapper}>
          <Container>
            <div className={styles.card_wrapper}>
              {favTutors &&
                favTutors.map((tutor) => (
                  <TutorsCard
                    tutor={tutor}
                    favTutor={favTutors}
                    onChildClick={setFavorite}
                  />
                ))}
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  );
}

export default Favorites;
