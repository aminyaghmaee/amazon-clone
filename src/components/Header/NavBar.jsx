import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./NavBar.css";
import {Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="nav_main">
      <div className="nav_left">
        <div className="first_container">
          <DehazeIcon />
          <div className="first_links_container">All</div>
        </div>
        <Link to="/todaysdeals">
          <div className="links_container">Today's Deals</div>
        </Link>
        <Link to="/customerservice">
          <div className="links_container">Customer Service</div>
        </Link>
        <Link to="/registery">
          <div className="links_container">Registry</div>
        </Link>
        <Link to="/giftcards">
          <div className="links_container">Gift Cards</div>
        </Link>
        <Link to="/sell">
          <div className="links_container">Sell</div>
        </Link>
      </div>

      <div className="nav_right">
        <Link to="/">
          <div className="last_links_container">Shop deals in Electronics</div>
        </Link>
      </div>
    </div>
  );
}
