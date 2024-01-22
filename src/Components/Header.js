import React, { useEffect, useState } from "react";
import log from "../images/Log.png";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TbMenuDeep } from "react-icons/tb";
const Header = () => {
  const [Toggle, setToggle] = useState(false);

  const handleMenubtn = () => {
    setToggle((tog) => !tog);
  };
  const cls = Toggle ? "nav-menu dotmenu" : "nav-menu";
  return (
    <div className="Header">
      <div className="logo">
        <img src={log} alt="" />
      </div>
      <div className={cls}>
        <a href="" id="active">
          Home
        </a>
        <a href="">About</a>
        <a href="">Orde Now</a>
        <a href="">Contact</a>
      </div>
      <div className="nav-icons">
        <div>
          <BsCart3 />
        </div>
        <div>
          <CgProfile />
        </div>
        <button id="orderbtn">Order Now</button>
        <div id="menu-dot" onClick={handleMenubtn}>
          <TbMenuDeep />
        </div>
      </div>
    </div>
  );
};

export default Header;
