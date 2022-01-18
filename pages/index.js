import React, { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import Layout from "../components/layout";
import TutorsCard from "../components/tutors-card";
import Filter from "../components/filter";
import CamblyConstants from "../src/constant/index";

function Home() {
  const [searchTutor, setsearchTutor] = useState(CamblyConstants.TUTORS);
  const [filterTutor, setFilterTutor] = useState(CamblyConstants.TUTORS);

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
    console.log(searchTutor);
  }, [searchTutor]);
  return (
    <div>
      <Layout>
        <Banner />
        <Filter
          handleKeyUp={(value) => handleSearch(value)}
          handleAccentFilter={(value) => handleFilter(value)}
        />
        <TutorsCard searchTutor={searchTutor} searchAccentTutor={filterTutor} />
      </Layout>
    </div>
  );
}

export default Home;
