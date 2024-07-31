import { lazy, useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero_section_bg from "../Assets/hero_section_bg.jpg";
// import Projects from "../Components/Projects";
// import Services from "./Services";
// import Testimonials from "../Components/Testimonials";

interface IHomeProps {}

const Services = lazy(() => import("./Services"));
const Projects = lazy(() => import("../Components/Projects"));
const Testimonials = lazy(() => import("../Components/Testimonials"));

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  useEffect(() => {
    document.title = "Shashwat | Home";
  }, []);

  return (
    <>
      <div className="hero-section">
        <Container>
          <Row className="text-center align-items-center justify-content-center">
            <Col md={8}>
              <h1>
                Innovative Web Development and Conversational AI Solutions
              </h1>
              <p>
                Empowering businesses with cutting-edge web solutions and
                AI-driven Customer Engagement.
              </p>

              <Link to={"about"}>
                <Button variant="primary" className="m-2">
                  Learn More
                </Button>
              </Link>
              <Link to={"contact"}>
                <Button variant="secondary" className="m-2">
                  Get in Touch
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Services />
      <Projects />
      <Testimonials />
    </>
  );
};

export default Home;
