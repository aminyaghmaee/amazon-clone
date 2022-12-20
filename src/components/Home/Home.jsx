import React from "react";
import amazonHomeImage from "../static/amazon-home-image.jpg";
import Product from "../product/Product";
import Card1 from "../static/card1.jpg";
import Ipad from "../static/ipad-pro.jpg";
import speaker from "../static/speaker.jpg";
import Monitor from "../static/monitor.jpg";
import mixer from "../static/mixer.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Home.css";
const Home = () => {

  function changeSlideImg() {
    setImgIndex((1+imgIndex) % homeSlideImgs.length);
  }
  useEffect(()=>{
    const interval=setInterval(changeSlideImg,6000);
    return () => {
      clearInterval(interval);
    } 
  })
  const homeSlideImgs= useSelector(state => state.homeSlideImgsReducer);
  const [imgIndex, setImgIndex]= useState(5);
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={amazonHomeImage} alt="" />
        <ArrowBackIosIcon className="Arrow__back" />
        <ArrowForwardIosIcon className="Arrow__forward" />
        <div className="home__row">
          <Product
            id="4903850"
            title="the lean startup"
            price={29.99}
            image={Card1}
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
