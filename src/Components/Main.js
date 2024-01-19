import React from "react";
import bg from "../images/Rectangle.png";
import bg10 from "../images/Rectangle10.png";
import bg2 from "../images/Rectangle2.png";
import bg8 from "../images/Rectangle8.png";
import bg9 from "../images/Rectangle9.png";

const Main = () => {
  return (
    <div className="Main">
      <div className="bg-img">
        <img src={bg} alt="" />
        <div className="main-content">
          <h3>Mex chicken</h3>
          <h1>The Perfect Peri Peri House</h1>
          <p>
            We take delight in providing you with the most amazing Peri Peri and
            Fried chicken experience feasible, making you craving more.
          </p>
          <h4>Order Now</h4>
        </div>
      </div>
      <div className="main-about">
        <div className="about-img-1">
          {" "}
          <img src={bg2} alt="" />
          <img src={bg8} alt="" />
        </div>
        <div className="about-img-2">
          <img src={bg9} alt="" id="img-1" />
          <img src={bg10} alt="" />
        </div>
        <div className="about-content">
          <span>Welcome to</span>
          <h1>
            Mex Chicken Peri Peri
            <p>
              {" "}
              Taste the deliciousness of our delicately Peri Peri chicken that
              is crispy and juicy. Our current objective is to make the finest
              delicious chicken in the vicinity We are constantly striving to
              improve our service and quality in order to give our customers the
              very best experience as a results we are finally proud to unveil
              and introduce our latest improvement, our new online ordering
              website you can now relax at home and order your favourite freshly
              prepared meals from Mex chicken.
            </p>{" "}
            <button>About Us</button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
