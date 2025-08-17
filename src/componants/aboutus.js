import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/aboutus.css";
import React from "react";
import AboutUsImage from "../assets/about_us.png";

function AboutUs() {
  return (
    <Container className="about-us-container">
      <Row>
        <Col>
          <img
            src={AboutUsImage}
            alt="About Us"
            className="img-fluid about-us-image"
            style={{ maxWidth: "100%", height: "80vh" }}
            loading="lazy"
          />
        </Col>
        <Col>
          <h2 className="display-4">Our Story</h2>
          <blockquote className="blockquote">
            <p>
              <span
                className="font-italic"
                style={{
                  fontSize: "30px",
                  color: "brown",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                "
              </span>
              Our mission is to provide a cozy space for coffee lovers to enjoy
              their favorite brews while connecting with others in the
              community. We believe in the power of coffee to bring people
              together, and we strive to create an environment that fosters
              conversation, creativity, and relaxation. Whether you're here for
              a quick coffee break or to spend a leisurely afternoon with
              friends, we want you to feel at home in our coffee shop. Our team
              is dedicated to serving you the best coffee experience possible,
              from sourcing high-quality beans to crafting the perfect cup. We
              can't wait to welcome you into our community of coffee lovers!
              <span
                className="font-italic"
                style={{
                  fontSize: "30px",
                  color: "brown",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                "
              </span>
            </p>
          </blockquote>
          <a href="#contact" className="btn btn-lg btn-aboutus">
            Know More
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
