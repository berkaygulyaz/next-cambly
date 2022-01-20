import React, { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import Layout from "../components/layout";
import TutorsCard from "../components/tutors-card";
import FilterTop from "../components/filter-top";
import CamblyConstants from "../src/constant/index";
import FilterBottom from "../components/filter-bottom";

function Home() {
  const [filterTutor, setFilterTutor] = useState(CamblyConstants.TUTORS);
  const [filterField, setFilterField] = useState(CamblyConstants.TUTORS);

  // const handleSearch = (e) => {
  //   setsearchTutor(
  //     CamblyConstants.TUTORS.filter((t) => t.name.toLowerCase().includes(e))
  //   );
  // };
  useEffect(() => {
    setFilterTutor(
      CamblyConstants.TUTORS.filter((e) =>
        e.personalInfo.find((i) => filterField.includes(i))
      )
    );
  }, [filterField]);
  return (
    <div>
      <Layout>
        <Banner />
        <FilterTop handleKeyUp={(value) => handleSearch(value)} />
        <FilterBottom
          items={CamblyConstants.FILTER}
          handleFilterField={(e) => setFilterField(e)}
        />
        <TutorsCard data={filterTutor} all={CamblyConstants.TUTORS} />
      </Layout>
    </div>
  );
}

export default Home;
