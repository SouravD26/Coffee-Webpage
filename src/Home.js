import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componants/header";
import LandingPage from "./componants/landingpage";
import AboutUs from "./componants/aboutus";
import Products from "./componants/products";
import SpecialitySection from "./componants/SpecialitySection";
import BookPage from "./componants/booktable";
import Footer from "./componants/footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutUs />
      <Products />
      <SpecialitySection />
      <BookPage />
      <Footer />
    </div>
  );
}

export default Home;
