import React from 'react'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function HomeSlider() {

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
    <>
     <img className="home__image" src={homeSlideImgs[imgIndex]} alt="" />
        <ArrowBackIosIcon className="Arrow__back"
          onClick={()=>{
            if (imgIndex == 0) {
              setImgIndex(homeSlideImgs.length - 1);
            }else{
              setImgIndex(imgIndex - 1)}
          }}
        />
        <ArrowForwardIosIcon className="Arrow__forward"
          onClick={()=>{
            changeSlideImg();
          }}
        />
    </>
  )
}
