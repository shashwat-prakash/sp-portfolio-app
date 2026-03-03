import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import footerData from "../data/footerData.json";

interface ISPFooterProps {}

interface PageLink {
  label: string;
  to: string;
}

interface SocialLink {
  label: string;
  url: string;
}

interface FooterData {
  contact: { email: string; phone: string };
  pages: PageLink[];
  social: SocialLink[];
}

const SPFooter: React.FunctionComponent<ISPFooterProps> = (props) => {
  const handleSubscribe = () => {
    toast.success(
      "You're all set! Expect the latest updates and offers in your inbox soon.",
      {
        position: "top-right",
        autoClose: 3000,
      },
    );
  };

  const { contact, pages, social } = footerData as FooterData;

  return (
    <>
      <footer className="footer bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contact Information</h5>
              <p>
                Email:{" "}
                <a target="_blank" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>

              <p>Phone: {contact.phone}</p>
            </Col>
            {/* <Col md={3}>
              <h5>Pages</h5>
              <p>
                {pages.map((page) => (
                  <React.Fragment key={page.to}>
                    <Link
                      to={page.to}
                      className="text-white text-decoration-underline"
                    >
                      {page.label}
                    </Link>
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Col> */}
            <Col md={4}>
              <h5>Follow Me</h5>
              <p>
                {social.map((link) => (
                  <React.Fragment key={link.url}>
                    <a target="_blank" href={link.url} className="text-white">
                      {link.label}
                    </a>
                    <br />
                  </React.Fragment>
                ))}
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
