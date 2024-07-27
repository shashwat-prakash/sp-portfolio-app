import * as React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <>
      <Container className="about-page">
        <Row className="my-5">
          <Col md={12}>
            <h1 className="text-center">About Me</h1>
            <p className="lead text-center">
              Experienced Software Developer specialized in Web Development,
              Backend, Conversational AI, and Chatbot solutions with a strong
              focus on integrating Generative AI technologies.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <Card className="mt-2">
              <Card.Body>
                <Card.Title>Skills and Expertise</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Web Development: ReactJs, Angular</li>
                    <li>Backend Development: .NET, C#, Python</li>
                    <li>Conversational AI: Amazon Lex</li>
                    <li>Contact Center Solutions: Amazon Connect</li>
                    <li>Database Management: SQL, MongoDB</li>
                    <li>Cloud Services: AWS</li>
                    <li>Generative AI Integrations</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mt-2">
              <Card.Body>
                <Card.Title>Professional Experience</Card.Title>
                <Card.Text>
                  <p>
                    With over 3 years of experience in DevOps and web
                    development, I have worked on numerous projects that
                    involved creating scalable and robust solutions for clients.
                    My expertise in cloud services and AI technologies has
                    enabled me to deliver innovative and efficient solutions
                    tailored to meet specific business needs.
                  </p>
                  <p>
                    I have a strong background in developing and integrating
                    conversational AI and chatbot solutions into contact center
                    platforms, significantly enhancing customer engagement and
                    support capabilities.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5 text-center">
          <Col>
            <h2>Let's Work Together</h2>
            <p>
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Whether you need a cutting-edge web
              application, an intelligent chatbot, or integration of generative
              AI technologies, I'm here to help.
            </p>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
