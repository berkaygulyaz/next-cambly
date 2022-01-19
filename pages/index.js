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
  const [searchTutor, setsearchTutor] = useState(CamblyConstants.TUTORS);
  const [filterTutor, setFilterTutor] = useState(CamblyConstants.TUTORS);
  const [a, setA] = useState(CamblyConstants.TUTORS);

  const handleSearch = (e) => {
    setsearchTutor(
      CamblyConstants.TUTORS.filter((t) => t.name.toLowerCase().includes(e))
    );
  };
  const handleFilter = (e) => {
    setFilterTutor(
      CamblyConstants.TUTORS.filter((t) => t.lessonLevel.includes(e))
    );
  };

  useEffect(() => {
    console.log(filterTutor);
  }, [filterTutor]);
  return (
    <div>
      <Layout>
        {/* <Banner /> */}
        {/* <FilterTop
          handleKeyUp={(value) => handleSearch(value)}
        /> */}
        <FilterBottom
          items={CamblyConstants.FILTER}
          handleFilter={(value) => handleFilter(value)}
        />
        <TutorsCard searchTutor={searchTutor} searchAccentTutor={filterTutor} />
      </Layout>
    </div>
  );
}

export default Home;
