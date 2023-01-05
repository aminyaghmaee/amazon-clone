import React, { useState } from "react";
import "./HomeBody.css";
import Headsets from "../../../static/headsets-image-transformed.png";
import keyboards from "../../../static/keyboards-image-transformed.png";
import Computermice from "../../../static/computer-mice-image-transformed.png";
import Chairs from "../../../static/chairs-image-transformed.png";
import Electronics from "../../../static/electronics-category-image.jpg";
import Health from "../../../static/Health-and-personalcare image.jpg";
import Pet from "../../../static/Pet image.jpg";
import Toys from "../../../static/toys30 image.jpg";
import Getfit from "../../../static/get fit image.jpg";
import Accessories from "../../../static/computer and accessories.png";
import Videogame from "../../../static/video games image.png";
import Baby from "../../../static/baby image.png";
import ToysandGames from "../../../static/toys and games image.png";
import Smartwatches from "../../../static/smartwatches image.jpg";
import Fitness from "../../../static/fitness needs image.jpg";
import HomeandKitchen from "../../../static/home & kitchen under 30$ image.jpg";
import Kindlereaders from "../../../static/kindle readers image.jpg";
import Apparel from "../../../static/gaming merchandise apparel image.jpg";
import Hats from "../../../static/gaming merchandise hats image.jpg";
import Actionfigures from "../../../static/gaming merchandise action figures image.jpg";
import Mugs from "../../../static/gaming merchandise mugs image.jpg";
import Clothing from "../../../static/favorite gift clothing image.jpg";
import Jawelry from "../../../static/favorite gift jawelry image.jpg";
import Shoes from "../../../static/favorite gift shoes image.jpg";
import Faccessories from "../../../static/favorite gift accessories image.jpg";
import Stockingshopall from "../../../static/stocking shop all image.jpg";
import Stockingunder$30 from "../../../static/stocking under 30$ image.jpg";
import Stockingunder$20 from "../../../static/stocking under 20$ image.jpg";
import Stockingunder$10 from "../../../static/stocking under 10$ image.jpg";
import Tools from "../../../static/tools image.jpg";
import Dresses from "../../../static/Dresses image.jpg";
import Arrivals from "../../../static/new arrivals in toys image.jpg";
import LaptopsandTablets from "../../../static/shop laptop & tablets image.jpg";
import StripLights from "../../../static/create with strip lights image.jpg";
import Product45milion from "../../../static/45milion product.jpg";
import Mostloved from "../../../static/most-loved gifts image.jpg";
import Stockingsuffers from "../../../static/stocking stuffers image.jpg";
import Fashionimage from "../../../static/fashion image.jpg";
import Homeimage from "../../../static/home image.jpg";
import Toysimage from "../../../static/toys image.jpg";
import Electronicsimage from "../../../static/electronics image.jpg";
import Holyday from "../../../static/holyday essentials.jpg";
import Beautyimage from "../../../static/beauty image.jpg";
import Sportsandoutdoor from "../../../static/sports & outdoors image.jpg";
import Giftcard from "../../../static/gift cards image.jpg";
import Holydayhomeprep from "../../../static/holiday home prep image.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react";
import { FlareSharp } from "@mui/icons-material";

const Category = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [ok, setOk] = useState(false);
  const [ok1, setOk1] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabled1, setDisabled1] = useState(false);
  
  const handleClick = (event) => {
    setIsActive(true);
    setOk(true);
    setTimeout(() => {
      setOk(false);
    }, 1000);
    // event.currentTarget.disabled = true;
    setDisabled(true);
    setDisabled1(false);
  };
  const handleClick1 = (event) => {
    setIsActive(false);
    setOk1(true);
    setTimeout(() => {
      setOk1(false);
    }, 1000);
    setDisabled1(true);
    setDisabled(false)
    // event.currentTarget.disabled = true;
  };

  return (
    <div className="all__categories">
      <div className="categories">
        <div className="category">
          <p className="category__title">Gaming accessories</p>
          <div className="category__group">
            <div>
              <img src={Headsets} alt="" />
              <span>Headsets</span>
            </div>
            <div>
              <img src={keyboards} alt="" />
              <span>Keyboards</span>
            </div>
            <div>
              <img src={Computermice} alt="" />
              <span>Computer mice</span>
            </div>
            <div>
              <img src={Chairs} alt="" />
              <span>Chairs</span>
            </div>
          </div>
          <button>see more</button>
        </div>
        <div className="category">
          <p className="category__title">Electronics</p>
          <img className="single__image" src={Electronics} alt="" />
          <button>see more</button>
        </div>
        <div className="category">
          <p className="category__title">Health & Personal Care</p>
          <img className="single__image" src={Health} alt="" />
          <button>Shop now</button>
        </div>
        <div className="sign__in">
          <p className="sign__in__title">Sign in for the best experience</p>
          <button>Sign in securely</button>
          <img src={Product45milion} alt="" />
        </div>
        <div className="category">
          <p className="category__title">Shop Pet supplies</p>
          <img className="single__image" src={Pet} alt="" />
          <button>see more</button>
        </div>
        <div className="category">
          <p className="category__title">Shop by Category</p>
          <div className="category__group">
            <div>
              <img src={Accessories} alt="" />
              <span>Headsets</span>
            </div>
            <div>
              <img src={Videogame} alt="" />
              <span>Keyboards</span>
            </div>
            <div>
              <img src={Baby} alt="" />
              <span>Computer mice</span>
            </div>
            <div>
              <img src={ToysandGames} alt="" />
              <span>Chairs</span>
            </div>
          </div>
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">Get fit at home</p>
          <img className="single__image" src={Getfit} alt="" />
          <button>explore now</button>
        </div>
        <div className="category">
          <p className="category__title">Toys Under $30</p>
          <img className="single__image" src={Toys} alt="" />
          <button>Shop now</button>
        </div>
      </div>

      <div className="single__category__mid">
        <div className="title__and__button">
          <p className="category__title">
            Shop gifts for everyone on your list
          </p>
          <button>Shop holiday gifts</button>
        </div>
        <button
          disabled={disabled1 ? true : false}
          onClick={handleClick1}
          className="arrow__back"
        >
          <ArrowBackIosIcon />
        </button>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className="arrow__forward"
        >
          <ArrowForwardIosIcon />
        </button>

        <div
          style={{
            right: isActive ? "1rem" : " ",
          }}
          id="images__category__mid"
          className={ok ? "ok" : null + ok1 ? "ok1" : null}
        > 
          <img src={Mostloved} alt="" />
          <img src={Stockingsuffers} alt="" />
          <img src={Fashionimage} alt="" />
          <img src={Homeimage} alt="" />
          <img src={Toysimage} alt="" />
          <img src={Electronicsimage} alt="" />
          <img src={Holyday} alt="" />
          <img src={Beautyimage} alt="" />
          <img src={Sportsandoutdoor} alt="" />
          <img src={Giftcard} alt="" />
          <img src={Holydayhomeprep} alt="" />
        </div>
      </div>
      <div className="categories">
        <div className="category">
          <p className="category__title">
            Shop activity trackers and smartwatches
          </p>
          <img className="single__image" src={Smartwatches} alt="" />
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">Home & Kitchen Under $30</p>
          <img className="single__image" src={HomeandKitchen} alt="" />
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">For your Fitness Needs</p>
          <img className="single__image" src={Fitness} alt="" />
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">Kindle E readers</p>
          <img className="single__image" src={Kindlereaders} alt="" />
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">Gaming merchandise</p>
          <div className="category__group">
            <div>
              <img src={Clothing} alt="" />
              <span>Clothing</span>
            </div>
            <div>
              <img src={Shoes} alt="" />
              <span>Shoes</span>
            </div>
            <div>
              <img src={Faccessories} alt="" />
              <span>Accessories</span>
            </div>
            <div>
              <img src={Jawelry} alt="" />
              <span>Jawelry</span>
            </div>
          </div>
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">Gaming merchandise</p>
          <div className="category__group">
            <div>
              <img src={Apparel} alt="" />
              <span>Apparel</span>
            </div>
            <div>
              <img src={Hats} alt="" />
              <span>Hats</span>
            </div>
            <div>
              <img src={Actionfigures} alt="" />
              <span>Action figures</span>
            </div>
            <div>
              <img src={Mugs} alt="" />
              <span>Mugs</span>
            </div>
          </div>
          <button>See more</button>
        </div>
        <div className="category">
          <p className="category__title">Gifts for every stocking</p>
          <div className="category__group">
            <div>
              <img src={Stockingshopall} alt="" />
              <span>Shop all</span>
            </div>
            <div>
              <img src={Stockingunder$30} alt="" />
              <span>under $30</span>
            </div>
            <div>
              <img src={Stockingunder$20} alt="" />
              <span>under $20</span>
            </div>
            <div>
              <img src={Stockingunder$10} alt="" />
              <span>under $10</span>
            </div>
          </div>
          <button>Shop gifts you love</button>
        </div>
        <div className="category">
          <p className="category__title">Deals in Tools and Home Improvement</p>
          <img className="single__image" src={Tools} alt="" />
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">Dresses</p>
          <img className="single__image" src={Dresses} alt="" />
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">New arrivals in Toys</p>
          <img className="single__image" src={Arrivals} alt="" />
          <button>Shop now</button>
        </div>
        <div className="category">
          <p className="category__title">Shop Laptop & Tablets </p>
          <img className="single__image" src={LaptopsandTablets} alt="" />
          <button>See more</button>
        </div>
        <div className="category">
          <p className="category__title">Create with strip lights</p>
          <img className="single__image" src={StripLights} alt="" />
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
