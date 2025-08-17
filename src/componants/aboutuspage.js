import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./header";
import Footer from "./footer";
import CoffeePour from "../assets/coffee-pour.png";
import { Carousel } from "react-bootstrap";

const testimonials = [
  { name: "Amit S.", review: "Absolutely love the coffee here!" },
  { name: "Priya R.", review: "The ambience is warm and cozy." },
  { name: "Rahul M.", review: "Excellent coffee and great vibes." },
  { name: "Sneha K.", review: "Amazing food and friendly staff." },
  { name: "Vikram T.", review: "Best espresso in town!" },
  { name: "Anita B.", review: "Their seasonal drinks are a must-try." },
  { name: "Rohan D.", review: "Perfect place to relax and recharge." },
  { name: "Neha P.", review: "Great service and fresh bakes." },
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const AboutUsPage = () => {
  return (
    <>
      <Header />
      {/* Coffee Section */}
      <div
        className="container"
        style={{ backgroundColor: "whitesmoke", paddingBottom: "20px" }}
      >
        <h2
          className="text-center display-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Our Journey
          <span style={{ color: "red", fontSize: "35px" }}>......</span>
        </h2>
        <div className="row mt-5">
          <div className="col">
            <img
              src={CoffeePour}
              alt="Coffee Beans"
              className="img-fluid mt-3"
              style={{
                boxShadow: "5px 5px 25px 5px black",
                borderRadius: "20px",
              }}
            />
          </div>
          <div className="col">
            <blockquote className="blockquote">
              <p className="mb-0">
                <span
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "35px",
                    color: "red",
                  }}
                >
                  O
                </span>
                ur story began with a simple love for coffee and a desire to
                create something special. What started as a humble idea between
                a few passionate coffee lovers has grown into a vibrant space
                where craftsmanship meets community. From our very first brew,
                we set out on a mission—to serve coffee with purpose. Sourcing
                the finest beans, respecting the farmers behind them, and
                perfecting every cup with care became our daily ritual. Over the
                years, we've grown not just in size, but in heart. We've built
                relationships with local growers, collaborated with artisans,
                and welcomed coffee enthusiasts from all walks of life. Every
                milestone, every challenge, and every customer has shaped our
                journey. Today, we’re more than just a coffee brand—we're a
                community. And while our methods may evolve, our purpose remains
                the same: to share moments of warmth, flavor, and connection—one
                cup at a time.
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Info Cards Section */}
      <section
        className="bg-light py-5"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        <div>
          <div className="row text-center px-5">
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="text-warning" style={{ fontSize: "30px" }}>
                  01
                </h5>
                <h6 style={{ fontSize: "25px" }}>Our Food</h6>
                <p className="small text-muted">
                  Crafted with care and made from the freshest ingredients, our
                  food is a blend of comfort, creativity, and flavor. From
                  hearty breakfasts to handcrafted sandwiches, fresh bakes, and
                  wholesome bites—each dish is prepared to complement your
                  coffee and brighten your day. Whether you're here for a quick
                  snack or a cozy meal, we serve food that feels just like
                  home—only better.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="text-warning" style={{ fontSize: "30px" }}>
                  02
                </h5>
                <h6 style={{ fontSize: "25px" }}>Our Drinks</h6>
                <p className="small text-muted">
                  At the heart of everything we do is our passion for
                  exceptional coffee. We handpick premium beans, roast them in
                  small batches, and brew with precision to bring out their
                  unique character. Whether you crave a bold espresso, a smooth
                  flat white, or a comforting cappuccino, every cup is crafted
                  with care and consistency. Our baristas are here to ensure
                  every sip tells a story—warm, rich, and unforgettable.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="text-warning" style={{ fontSize: "30px" }}>
                  03
                </h5>
                <h6 style={{ fontSize: "25px" }}>Excellent Coffee</h6>
                <p className="small text-muted">
                  Beyond coffee, we offer a refreshing range of drinks to suit
                  every taste. Enjoy our selection of herbal teas, iced
                  beverages, cold brews, fruit coolers, and seasonal
                  specials—all made with fresh ingredients and our signature
                  touch. Whether you're cooling down on a sunny day or looking
                  for something new to try, our drinks menu offers the perfect
                  balance of flavor and refreshment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-5 px-3 text-center">
        <h2 className="mb-4 display-6">What Our Customers Say ❤️</h2>
        <Carousel
          controls={false}
          indicators={false}
          interval={3000}
          pause={false}
        >
          {chunkArray(testimonials, 4).map((group, idx) => (
            <Carousel.Item key={idx}>
              <div className="row justify-content-center px-3">
                {group.map((testimonial, index) => (
                  <div className="col-md-3 mb-4" key={index}>
                    <div
                      className="bg-white p-3 rounded h-100 mx-2 my-3"
                      style={{ boxShadow: "10px 10px 10px 5px #393E46" }}
                    >
                      <p className="fst-italic">“{testimonial.review}”</p>
                      <h6 className="mt-3 text-primary">
                        — {testimonial.name}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
