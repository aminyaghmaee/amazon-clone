import React from "react";
import "./Home.css";
import Category from "./category/Category";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <HomeSlider/>
        <Category />
      </div>
    </div>
  );
};

export default Home;
