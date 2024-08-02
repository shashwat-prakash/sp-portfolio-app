import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface ISPFooterProps {}

const SPFooter: React.FunctionComponent<ISPFooterProps> = (props) => {
  const handleSubscribe = () => {
    toast.success(
      "You're all set! Expect the latest updates and offers in your inbox soon.",
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
  };

  return (
    <>
      <footer className="footer bg-dark text-white">
        <Container>
          <Row>
            <Col md={3}>
              <h5>Contact Information</h5>
              {/* <p>Email: shashwat22.14sep@gmail.com</p> */}
              <p>
                Email:{" "}
                <a target="_blank" href="mailto:shashwat22.14sep@gmail.com">
                  shashwat22.14sep@gmail.com
                </a>
              </p>

              <p>Phone: +91-9066740766</p>
            </Col>
            <Col md={3}>
              <h5>Pages</h5>
              <p>
                <Link to={"/"} className="text-white text-decoration-underline">
                  Home
                </Link>
                <br />
                <Link
                  to={"about"}
                  className="text-white text-decoration-underline"
                >
                  About
                </Link>
                <br />
                <Link
                  to={"services"}
                  className="text-white text-decoration-underline"
                >
                  Services
                </Link>
                <br />
                <Link
                  to={"contact"}
                  className="text-white text-decoration-underline"
                >
                  Contact Us
                </Link>
              </p>
            </Col>
            <Col md={3}>
              <h5>Follow Me</h5>
              <p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shashwat-prk"
                  className="text-white"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://github.com/shashwat-prakash"
                  className="text-white"
                >
                  GitHub
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/12359013/shashwat-prakash"
                  className="text-white"
                >
                  Stack Overflow
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://x.com/ShashwatPrk"
                  className="text-white"
                >
                  Twitter
                </a>
              </p>
            </Col>
            <Col md={3}>
              <h5>Subscribe</h5>
              <p>Get the latest updates and offers.</p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mb-2"
                />
                <Button variant="primary" onClick={handleSubscribe}>
                  Subscribe
                </Button>
                {/* <button type="submit" className="btn btn-primary">
                  Subscribe
                </button> */}
              </form>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <p>&copy; 2024 Shashwat Prakash. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default SPFooter;
