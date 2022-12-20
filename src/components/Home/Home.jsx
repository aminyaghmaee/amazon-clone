import React from "react";
import amazonHomeImage from "../static/amazon-home-image.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Home.css";
// import { Category } from "@mui/icons-material";
import Category from "../category/category";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazonHomeImage} alt="" />
        <ArrowBackIosIcon className="Arrow__back" />
        <ArrowForwardIosIcon className="Arrow__forward" />
        <Category/>
        {/* <div className="home__row">
          <Category
            title="Gaming accessories"
            img={Headsets}
            img_2={keyboards}
            img_3={Computermice}
            img_4={Chairs}
            span_1="Headsets"
            span_2="Keyboards"
            span_3="Computer mice"
            span_4="Chairs"
          />
          <Category title="Dresses" />
          <Category title="Shop by Category" />
          <Category title="Sign in for the best experience" />
        </div>

        <div className="home__row">
          <Category title="Health & Personal Care" />
          <Category title="Get fit at home" />
          <Category title="Toys Under $30" />
          <Category title="Electronics" img={Electronics} />
        </div>
        <div className="home__single__column"></div>
        <div className="home__row">
          <Category title="For your Fitness Needs" />
          <Category title="New arrivals in Toys" />
          <Category title="Gifts for every stocking" />
          <Category title="Home & Kitchen Under $30" />
        </div>

        <div className="home__row">
          <Category title="Shop activity trackers and smartwatches" />
          <Category title="Kindle E readers" />
          <Category title="Shop Laptops & Tablets" />
          <Category title="Gaming merchandise" />
        </div>

        <div className="home__row">
          <Category title="Create with strip lights" />
          <Category title="Shop Pet supplies" />
          <Category title="Deals on your favorite gifts" />
          <Category title="Deals in Tools and Home Improvement" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
