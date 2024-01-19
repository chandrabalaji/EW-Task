import React from "react";
import bg1 from "../images/Rectangle1.png";
import bg2 from "../images/Groupe2.png";
import bg3 from "../images/Group3.png";
import bg4 from "../images/Rectangle3.png";

import bg5 from "../images/Rectangle7.png";
import bg6 from "../images/Rectangle11.png";
import bg7 from "../images/Rectangle12.png";
import bg8 from "../images/Rectangle13.png";

const Menu = () => {
  return (
    <div className="menu">
      <div>
        <img src={bg1} alt="" />
        <div className="menu-content">
          <div className="menu-title">
            <h3>Our Menu</h3>
            <h1>
              Our Menu Mex-Chicken Special
              <span>Menu</span>
            </h1>
          </div>
          <div className="menu-items">
            <img src={bg2} alt="" />
            <img src={bg3} alt="" />
            <img src={bg4} alt="" />
          </div>
        </div>
      </div>
      <div className="menu-grid">
        <img src={bg5} alt="" />
        <img src={bg6} alt="" />
        <img src={bg7} alt="" />
        <img src={bg8} alt="" />
      </div>
    </div>
  );
};

export default Menu;
