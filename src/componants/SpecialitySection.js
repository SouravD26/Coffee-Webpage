import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Speciality.css";

import coffeeCup from "../assets/middle.png";
import iconBeans from "../assets/beans.png";
import iconMachine from "../assets/machine.png";
import iconDrip from "../assets/drip.png";
import iconCup from "../assets/cup.png";
import iconBag from "../assets/bag.png";
import iconGrind from "../assets/grind.png";

const features = [
  {
    title: "LOCALLY ROASTED BEANS",
    icon: iconBeans,
    desc: "Freshly roasted beans for a modern coffee experience.",
  },
  {
    title: "SIGNATURE HOUSE BLENDS",
    icon: iconBag,
    desc: "Unique flavor blends crafted in-house for rich taste.",
  },
  {
    title: "SEASONAL & LIMITED EDITION DRINKS",
    icon: iconMachine,
    desc: "Creative, time-limited options to explore bold flavors.",
  },
];

const rightFeatures = [
  {
    title: "LOCALLY ROASTED BEANS",
    icon: iconGrind,
    desc: "Beans selected locally for authentic taste.",
  },
  {
    title: "SIGNATURE HOUSE BLENDS",
    icon: iconDrip,
    desc: "Enjoy distinctive combinations in every sip.",
  },
  {
    title: "SEASONAL & LIMITED EDITION DRINKS",
    icon: iconCup,
    desc: "Rotating drink specials for every season.",
  },
];

const SpecialitySection = () => {
  return (
    <div className="container text-center my-5 speciality-section">
      <h2 className="mb-3">OUR SPECIALITY</h2>
      <p className="mx-auto mb-4 w-75">
        At our coffee shop, we take pride in our unique offerings that set us
        apart. From locally roasted beans to signature house blends and seasonal
        drinks, we ensure every cup is a delightful experience. Discover the
        passion and quality that make us a favorite among coffee lovers.
      </p>
      <div className="row align-items-center">
        <div className="col-md-4">
          {features.map((item, idx) => (
            <div className="d-flex align-items-start mb-4" key={idx}>
              <img src={item.icon} alt="" width="40" className="me-3" />
              <div className="text-start">
                <h6>{item.title}</h6>
                <p className="mb-0 small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4 my-4 my-md-0 img-md">
          <img src={coffeeCup} alt="coffee cup" className="img-fluid img-m" />
        </div>

        <div className="col-md-4">
          {rightFeatures.map((item, idx) => (
            <div className="d-flex align-items-start mb-4" key={idx}>
              <img src={item.icon} alt="" width="40" className="me-3" />
              <div className="text-start">
                <h6>{item.title}</h6>
                <p className="mb-0 small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-dark mt-4 px-4 py-2 btn-kn">KNOW MORE</button>
    </div>
  );
};

export default SpecialitySection;
