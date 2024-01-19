import React from "react";
import bg1 from "../images/Fried chicken.png";
import bg2 from "../images/Group.png";
import bg3 from "../images/Group7.png";
import bg4 from "../images/Wedding dinner.png";
import bg5 from "../images/Rectangle14.png";
import bg6 from "../images/Rectangle15.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-details">
        <div className="about-d-div">
          <img src={bg1} alt="" />
          <h3>Best Quality</h3>
          <p>
            Experience the flavour of food with our organic and pure
            ingredients.
          </p>
        </div>
        <div className="about-d-div">
          <img src={bg2} alt="" />
          <h3>On Time</h3>
          <p>
            With our hassle-free delivery,Delicious cuisine in the span of
            minutes.
          </p>
        </div>
        <div className="about-d-div">
          <img src={bg3} alt="" />
          <h3>Master Chefs</h3>
          <p>
            Our master chefs, Maestros in their field, create a gastronomic food
            experience.
          </p>
        </div>
        <div className="about-d-div">
          <img src={bg4} alt="" />
          <h3>Tasty Food</h3>
          <p>
            Order to taste our flavourful adventures promising a tantalizing
            experience.
          </p>
        </div>
      </div>
      <div className="about-details-2">
        <div className="img-ret">
          <img src={bg5} alt="" />
          <img src={bg6} alt="" id="img-abs" />
        </div>
        <div className="details-cont">
          <span id="red">Words with us</span>
          <h2>Delicious, Freshly made Peri Peri chicken</h2>
          <p>
            We value your feedback and are here to assist you with any queries
            or concerns, Whether you have a suggestion, need help placing an
            order or want to provide feedback on your recent experience. Please
            don't hesitate to reach us using the contact information above. We
            value your input and are always looking for ways to improve our
            services.
          </p>
            <button> Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
