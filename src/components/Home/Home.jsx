import React from "react";
import amazonHomeImage from "../static/amazon-home-image.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Home.css";
import Category from "../category/category";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  function changeSlideImg() {
    setImgIndex((1 + imgIndex) % homeSlideImgs.length);
  }
  useEffect(() => {
    const interval = setInterval(changeSlideImg, 6000);
    return () => {
      clearInterval(interval);
    };
  });
  const homeSlideImgs = useSelector((state) => state.homeSlideImgsReducer);
  const [imgIndex, setImgIndex] = useState(5);
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazonHomeImage} alt="" />
        <ArrowBackIosIcon className="Arrow__back" />
        <ArrowForwardIosIcon className="Arrow__forward" />
        <Category />
      </div>
    </div>
  );
};

export default Home;
