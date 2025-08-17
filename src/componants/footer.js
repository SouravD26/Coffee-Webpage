import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/logo.png";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer-bg text-light py-4">
      <Container>
        <Row>
          {/* Logo, Description & Socials */}
          <Col md={3} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <img
                src={logo}
                alt="Coffee Shop Logo"
                style={{ width: 120, marginRight: 10 }}
              />
            </div>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger fs-5"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger fs-5"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger fs-5 me-2"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>

          {/* Useful Links */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Useful Links</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="/" className="footer-link links-sd">
                  Home
                </a>
              </li>
              <li>
                <a href="/aboutus" className="footer-link links-sd mt-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className="footer-link links-sd mt-2">
                  Menu
                </a>
              </li>
              {/* <li>
                <a href="/contactus" className="footer-link links-sd">
                  Contact Us
                </a>
              </li> */}
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <div>Dacres Lane, Kolkata</div>
            <div>coffeeshop@email.com</div>
            <div>(+ 91) 12345-67890</div>
          </Col>

          {/* Opening Hours */}
          <Col md={3}>
            <h5 className="fw-bold mb-3">Opening Hours</h5>
            <div>Mon - Fri: 8:00 A.M. - 8:00 P.M.</div>
            <div>Sat: 10:00 A.M. - 12:00 P.M.</div>
            <div>Sun: 9:00 A.M. - 12:00 P.M.</div>
          </Col>
        </Row>

        <hr className="bg-light" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} Coffee Shop. All Rights Reserved.😊
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
