import React from "react";
import bg1 from "../images/Frame1.png";
import bg2 from "../images/Log.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="banner">
        <img src={bg1} alt="" />
        <div className="bottom-nav">
          <div className="logo">
            <img src={bg2} alt="" id="logos"/>
          </div>
          <div className="bottom-nav-li">
            <a href="">About</a>
            <a href="">Order Now</a>
            <a href="">Contact</a>
            <a href="">Faq</a>
          </div>
        </div>
      </div>
      <div className="socila-media">
        <div className="footer-center">
          <FaInstagram />
          <FaFacebook />
        </div>
        <div className="footer-center">
          <img src={bg2} alt="" id="logos"/>
        </div>
        <div className="info">
          Mex Chicken | Adrees:8,Willow Road Costleford,WF105AR |
          Email:contact@mexchicken.com |Phone:019773610077
        </div>
      </div>
      <div className="rights">
        <p>@2023 Mex Chicken All Rights Reserved,Developed by EezzyPOS</p>
        <div>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
