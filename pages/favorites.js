import React, { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import Layout from "../components/layout";
import TutorsCard from "../components/tutors-card";
import FilterTop from "../components/filter-top";
import CamblyConstants from "../src/constant/index";
import FilterBottom from "../components/filter-bottom";

function Favorites() {
  const [favTutors, setFavTutors] = useState("");

  useEffect(() => {
    setFavTutors(JSON.parse(localStorage.getItem("tutor")));
  }, []);

  return (
    <div>
      <Layout>
        <Banner />
        <FilterTop handleKeyUp={(value) => handleSearch(value)} />
        <TutorsCard listTutor={favTutors} />
      </Layout>
    </div>
  );
}

export default Favorites;
