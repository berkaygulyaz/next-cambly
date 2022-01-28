import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import TutorsCard from "../components/tutors-card";
import FilterTop from "../components/filter-top";
import CamblyConstants from "../src/constant/index";
import FilterBottom from "../components/filter-bottom";
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
import styles from "../components/tutors-card/style.module.scss";

function Home() {
  const [filterTutor, setFilterTutor] = useState(CamblyConstants.TUTORS);
  const [filterField, setFilterField] = useState(CamblyConstants.TUTORS);

  const clickAlert = (data) => {
    // localstorage datası var mı
    // var ise önce çekip bir değişkene at
    // localStorage datası içinde data parametresinin id'si var mı
    // yok ise ekle, var ise çıkar
    // localstorage'a veriyi yaz
    // eğer localstorage'da hiç data yok ise yeni oluşturup localstorage'a ekle
    let storageTutor = JSON.parse(localStorage.getItem("tutor"));

    if (storageTutor == null) {
      localStorage.setItem("tutor", JSON.stringify([data]));
    }
    console.log(storageTutor.filter((e) => e.id !== data.id));
  };
  // const handleSearch = (e) => {
  //   setsearchTutor(
  //     CamblyConstants.TUTORS.filter((t) => t.name.toLowerCase().includes(e))
  //   );
  // };

  // useEffect(() => {
  //   setFilterTutor(
  //     CamblyConstants.TUTORS.filter((e) =>
  //       e.personalInfo.find((i) => filterField.includes(i))
  //     )
  //   );
  // }, [filterField]);

  return (
    <div>
      <Layout>
        <Banner />
        <FilterTop handleKeyUp={(value) => handleSearch(value)} />
        <FilterBottom
          items={CamblyConstants.FILTER}
          handleFilterField={(e) => setFilterField(e)}
        />
        <div className={styles.cardsWrapper}>
          <Container>
            <Row>
              <Col>
                <div className={styles.cards}>
                  {CamblyConstants.TUTORS.map((tutor) => (
                    <TutorsCard
                      data={filterTutor}
                      tutor={tutor}
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

export default Home;
