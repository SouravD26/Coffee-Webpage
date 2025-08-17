import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/landingpage.css";
import { Container, Button } from "react-bootstrap";
import coffee from "../assets/coffee.png";

function BookPage() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${coffee})` }}>
      <div className="overlay">
        <Container className="text-container">
          <h1 className="display-4">SAVOUR THE MOMENT WITH US</h1>
          <p className="lead">
            A warm cup, a cozy place, and the perfect moment — all waiting for
            you. Join us for a delightful experience that will awaken your
            senses and leave you craving for more. Whether it's a quiet morning
            or a lively afternoon, we've got the perfect spot for you. ❤️
          </p>
          <Button variant="light" className="btn-book">
            BOOK YOUR TABLE NOW
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default BookPage;
