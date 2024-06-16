import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </>
  );
};

export default Home;
