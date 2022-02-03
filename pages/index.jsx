import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import TutorsCard from "../components/tutors-card";
import FilterTop from "../components/filter-top";
import CamblyConstants from "../src/constant/index";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
import setFavorite from "../src/helpers/setFavorite";
import styles from "../src/assets/common/style.module.scss";

function Home() {
  const [searchTutor, setsearchTutor] = useState(CamblyConstants.TUTORS);

  const handleSearch = (e) => {
    setsearchTutor(
      CamblyConstants.TUTORS.filter((t) => t.name.toLowerCase().includes(e))
    );
  };

  return (
    <main>
      <Layout>
        <section className={styles.banner}>
          <Container>
            <Banner />
          </Container>
        </section>
        <section className={styles.filterTopWrapper}>
          <Container>
            <FilterTop
              handleKeyUp={(value) => handleSearch(value)}
              status="homepage"
            />
          </Container>
        </section>
        <section className={styles.cardsWrapper}>
          <Container>
            <div className={styles.card_wrapper}>
              {searchTutor.map((tutor) => (
                <TutorsCard tutor={tutor} onChildClick={setFavorite} />
              ))}
            </div>
          </Container>
        </section>
      </Layout>
    </main>
  );
}

export default Home;
