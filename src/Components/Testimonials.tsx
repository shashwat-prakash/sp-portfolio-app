import * as React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import raj_mehta from "../Assets/raj_mehta.jpg";
import priyatam_piyush from "../Assets/priyatam_piyush.jpg";

interface ITestimonialsProps {}

const Testimonials: React.FunctionComponent<ITestimonialsProps> = (props) => {
  const images: Record<string, string> = {
    raj_mehta: raj_mehta,
    priyatam_piyush: priyatam_piyush,
  };

  const testimonials = [
    {
      name: "Rajkishor Mehta",
      feedback:
        "Consistently demonstrates a deep understanding of their work and reliably meets deadlines. Their ability to tackle challenges head-on and contribute effectively to our projects is greatly valued. I appreciate their dedication and expertise.",
      designation: "Software Engineer",
      company: "KMG Solution",
      image: "raj_mehta",
    },
    {
      name: "Meghraj Vinod",
      feedback: "Excellent support and communication.",
      designation: "Principle Consultant",
      company: "Genpact",
      image: "client2.jpg",
    },
    {
      name: "Deepak Sharma",
      feedback: "Highly recommend for AI solutions.",
      designation: "Assistant Manager",
      company: "Accenture",
      image: "client3.jpg",
    },
    {
      name: "Priyatam Piyush",
      feedback:
        "Working with this individual is a rare opportunity to come across; a self-driven natural leader with exceptional teamwork spirit and ethics. It was indeed a great pleasure working alongside this Software Developer at Genpact as a teammate. Their ability to oversee all teams and complete assigned tasks on time was particularly impressive to me.",
      designation: "Consultant",
      company: "Genpact",
      image: "priyatam_piyush",
    },
    {
      name: "Anil Pawar",
      feedback: "Excellent support and communication.",
      designation: "Senior Principle Consultant",
      company: "Genpact",
      image: "client2.jpg",
    },
    {
      name: "Kratika Sharma",
      feedback: "Highly recommend for AI solutions.",
      designation: "Consultant",
      company: "Genpact",
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
                      src={images[testimonial.image]}
                      className="rounded-circle mx-auto mt-3"
                      style={{ width: "160px", height: "150px" }}
                    />
                    <Card.Body>
                      <Card.Title>{testimonial.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {testimonial.designation}, {testimonial.company}
                      </Card.Subtitle>
                      {/* <Card.Text>{testimonial.feedback}</Card.Text> */}
                      <blockquote className="blockquote">
                        <p className="small">{testimonial.feedback}</p>
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
