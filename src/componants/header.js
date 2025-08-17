import React from "react";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} height={80} alt="Coffee Shop" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link
              href="/aboutus"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/menu"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Menu
            </Nav.Link>
            {/* <Nav.Link
              href="/contact"
              style={{
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Contact Us
            </Nav.Link> */}
            <Nav.Link
              href="/cart"
              style={{
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
