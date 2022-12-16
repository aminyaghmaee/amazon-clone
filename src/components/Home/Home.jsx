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
