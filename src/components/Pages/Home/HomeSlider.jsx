import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import "./HomeSlider.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function HomeSlider() {
  const [direction, setDirection] = useState("slide-right");
  function changeSlideImg() {
    setDirection("slide-right");
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
  const childFactory = (direction) => (child) =>
    React.cloneElement(child, { classNames: direction });

  return (
    <div className="appp">
      <div className="image_wrapper">
        <TransitionGroup childFactory={childFactory(direction)}>
          <CSSTransition
            key={homeSlideImgs[imgIndex]}
            timeout={1000}
            classNames={direction}
          >
            <img
              className="home__image appp"
              src={homeSlideImgs[imgIndex]}
              alt=""
            />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <ArrowBackIosIcon
        className="Arrow__back appp"
        onClick={() => {
          if (imgIndex == 0) {
            setImgIndex(homeSlideImgs.length - 1);
          } else {
            setImgIndex(imgIndex - 1);
            setDirection("slide-left");
          }
        }}
      />
      <ArrowForwardIosIcon
        className="Arrow__forward appp"
        onClick={() => {
          changeSlideImg();
        }}
      />
    </div>
  );
}
