import { useEffect } from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";

import servicesData from "../data/services.json";

interface IServicesProps {}

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Services: React.FunctionComponent<IServicesProps> = () => {
  useEffect(() => {
    document.title = "Shashwat | Services";
  }, []);

  const services: Service[] = servicesData as Service[];

  return (
    <>
      <Container className="services-page" id="service">
        <Row className="my-5">
          <Col md={12}>
            <h1 className="text-center">
              <Nav.Link href="#service">Our Services</Nav.Link>
            </h1>
            <p className="lead text-center">
              Offering a range of services to meet your business needs, from web
              development to advanced AI solutions.
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center h-100 tilt-card">
                <Card.Body>
                  <div className="service-icon h1">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
