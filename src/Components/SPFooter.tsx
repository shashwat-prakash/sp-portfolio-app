import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface ISPFooterProps {}

const SPFooter: React.FunctionComponent<ISPFooterProps> = (props) => {
  return (
    <>
      <footer className="footer bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contact Information</h5>
              <p>Email: shashwat22.14sep@gmail.com</p>
              <p>Phone: +91-9066740766</p>
            </Col>
            <Col md={4}>
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
                <a href="#" className="text-white">
                  Twitter
                </a>
              </p>
            </Col>
            <Col md={4}>
              <h5>Subscribe</h5>
              <p>Get the latest updates and offers.</p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
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
