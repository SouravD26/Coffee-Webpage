import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/landingpage.css";
import { Container, Button } from "react-bootstrap";
import coffeePic from "../assets/coffee-pic.png";

function LandingPage() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${coffeePic})` }}
    >
      <div className="overlay">
        <Container className="text-container">
          <h1 className="display-4">
            BREWED WITH
            <br />
            PASSION. SERVED
            <br />
            WITH LOVE.
          </h1>
          <p className="lead">
            The best brewing corner of flavours where a great coffee meets great
            community.
          </p>
          <Button variant="light" className="btn-book">
            BOOK NOW
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
