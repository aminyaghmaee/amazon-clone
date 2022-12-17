import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className='nav_main'>
      <div className='nav_left'>
        <DehazeIcon/>
        <span className="nav_left_span">
          All
        </span>
      </div>
      <div className='nav_fill'>
        <a>Today's Deals</a>
        <a>Customer Service</a>
        <a>Registry</a>
        <a>Gift Cards</a>
        <a>Sell</a>
      </div>
      <div className='nav_right'>
        <a>Shop deals in Electronics</a>
      </div>
    </div>
  )
}
