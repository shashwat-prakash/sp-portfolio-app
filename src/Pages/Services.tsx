import { useEffect } from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";

interface IServicesProps {}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  useEffect(() => {
    document.title = "Shashwat | Services";
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using ReactJs and Angular.",
      icon: "🌐",
    },
    {
      title: "Backend Development",
      description:
        "Creating robust backend solutions with .NET, C#, Python, and databases like SQL and MongoDB.",
      icon: "🔧",
    },
    {
      title: "Conversational AI",
      description:
        "Developing intelligent chatbots using Amazon Lex and other AI tools.",
      icon: "🤖",
    },
    {
      title: "Chatbot Solutions",
      description:
        "Integrating chatbots into contact center platforms like Amazon Connect to enhance customer support and engagement.",
      icon: "📞",
    },
    {
      title: "Generative AI Integrations",
      description:
        "Implementing generative AI technologies to create interactive and personalized user experiences.",
      icon: "💡",
    },
    {
      title: "Cloud Services",
      description:
        "Leveraging AWS for scalable and secure cloud solutions, including deployment, management, and optimization.",
      icon: "☁️",
    },
  ];

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
