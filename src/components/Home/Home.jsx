import React, {useState,useEffect} from "react";
import Product from "../product/Product";
import Card1 from "../static/card1.jpg";
import Ipad from "../static/ipad-pro.jpg";
import speaker from "../static/speaker.jpg";
import Monitor from "../static/monitor.jpg";
import mixer from "../static/mixer.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Home.css";
import { useSelector } from "react-redux";

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
        <img className="home__image" src={homeSlideImgs[imgIndex]} alt="" />
        <ArrowBackIosIcon className="Arrow__back" 
          onClick={()=>{
            if (imgIndex == 0) {
              setImgIndex(homeSlideImgs.length -1)
            }else{
              setImgIndex((imgIndex-1) % homeSlideImgs.length);}
          }}
        />
        <ArrowForwardIosIcon className="Arrow__forward"
          onClick={()=>{
            setImgIndex((1+imgIndex) % homeSlideImgs.length);
          }}
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="the lean startup"
            price={29.99}
            image={Card1}
          />
          <Product
            id="23445930"
            title="Amazone echo (3rd generation) | Smart speaker with Alexa, charcoal Fabric"
            price={98.99}
            image={speaker}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image={Ipad}
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image={Monitor}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={mixer}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
