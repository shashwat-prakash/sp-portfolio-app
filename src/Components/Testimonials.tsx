import * as React from "react";
import { Card, Carousel, Col, Container, Nav, Row } from "react-bootstrap";
import raj_mehta from "../Assets/raj_mehta.jpg";
import priyatam_piyush from "../Assets/priyatam_piyush.jpg";
import shubh_jain from "../Assets/shubh_jain.jpg";
import monika_malik from "../Assets/monika_malik.jpeg";

import testimonialsData from "../data/testimonials.json";

interface ITestimonialsProps {}

interface Testimonial {
  name: string;
  feedback: string;
  designation: string;
  company: string;
  image: string;
}

const Testimonials: React.FunctionComponent<ITestimonialsProps> = () => {
  const images: Record<string, string> = {
    raj_mehta,
    monika_malik,
    priyatam_piyush,
    shubh_jain,
  };

  const testimonials: Testimonial[] = testimonialsData as Testimonial[];

  // helper to split into chunks of size n
  const chunk = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groups = chunk(testimonials, 3);

  return (
    <>
      <Container className="testimonials" id="testimonials">
        <h2 className="text-center">
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
        </h2>
        <Carousel>
          {groups.map((group, idx) => (
            <Carousel.Item key={idx} interval={4000}>
              <Row className="justify-content-center">
                {group.map((testimonial, index) => (
                  <Col md={4} className="mb-3" key={index}>
                    <Card className="text-center h-100">
                      <Card.Img
                        variant="top"
                        src={images[testimonial.image]}
                        className="rounded-circle mx-auto mt-3"
                        style={{ width: "160px", height: "160px" }}
                      />
                      <Card.Body>
                        <Card.Title>{testimonial.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {testimonial.designation}, {testimonial.company}
                        </Card.Subtitle>
                        <blockquote className="blockquote">
                          <p className="small">{testimonial.feedback}</p>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* legacy layout kept for reference
      <Container className="testimonials">
        <h2 className="text-center">Testimonials</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "100px", height: "100px" }}
                />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Text>{testimonial.feedback}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  );
};

export default Testimonials;
