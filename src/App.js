import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./componants/aboutuspage";
import Menu from "./componants/menu";
// import ContactUs from "./componants/contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/contactus" element={<ContactUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
