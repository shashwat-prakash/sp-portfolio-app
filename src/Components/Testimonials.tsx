import * as React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import hero_section_bg from "../Assets/hero_section_bg.jpg";

interface ITestimonialsProps {}

const Testimonials: React.FunctionComponent<ITestimonialsProps> = (props) => {
  const testimonials = [
    {
      name: "Ankit Maheshwari",
      feedback: "Great work on the project!",
      image: "client1.jpg",
    },
    {
      name: "Meghraj Vinod",
      feedback: "Excellent support and communication.",
      image: "client2.jpg",
    },
    {
      name: "Deepak Sharma",
      feedback: "Highly recommend for AI solutions.",
      image: "client3.jpg",
    },
    {
      name: "Priyatam",
      feedback: "Great work on the project!",
      image: "client1.jpg",
    },
    {
      name: "Anil Pawar",
      feedback: "Excellent support and communication.",
      image: "client2.jpg",
    },
    {
      name: "Kratika Sharma",
      feedback: "Highly recommend for AI solutions.",
      image: "client3.jpg",
    },
  ];
  return (
    <>
      <Container className="testimonials">
        <h2 className="text-center">Testimonials</h2>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index} interval={3000}>
              <Row className="justify-content-center">
                <Col md={4} className="mb-2">
                  <Card className="text-center h-100">
                    <Card.Img
                      variant="top"
                      src={hero_section_bg}
                      className="rounded-circle mx-auto mt-3"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <Card.Body>
                      <Card.Title>{testimonial.name}</Card.Title>
                      {/* <Card.Text>{testimonial.feedback}</Card.Text> */}
                      <blockquote className="blockquote">
                        <p>{testimonial.feedback}</p>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* <Container className="testimonials">
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
