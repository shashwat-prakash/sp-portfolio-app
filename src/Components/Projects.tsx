import * as React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import hero_section_bg from "../Assets/hero_section_bg.jpg";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const projects = [
    {
      title: "VenuePay",
      description: "Description for project one.",
      image: "project1.jpg",
      link: "/portfolio/project-one",
    },
    {
      title: "Agenty",
      description: "Description for project two.",
      image: "project2.jpg",
      link: "/portfolio/project-two",
    },
    {
      title: "SoftShed",
      description: "Description for project three.",
      image: "project3.jpg",
      link: "/portfolio/project-three",
    },
    {
      title: "Amazon Device Repair",
      description: "Description for project one.",
      image: "project1.jpg",
      link: "/portfolio/project-one",
    },
    {
      title: "Zeta",
      description: "Description for project two.",
      image: "project2.jpg",
      link: "/portfolio/project-two",
    },
    {
      title: "RevolOne",
      description: "Description for project three.",
      image: "project3.jpg",
      link: "/portfolio/project-three",
    },
  ];

  return (
    <>
      <Container className="portfolio-highlights">
        <h2 className="text-center">Portfolio Highlights</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 tilt-card">
                <Card.Img variant="top" src={hero_section_bg} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    disabled
                    variant="outline-primary"
                    href={project.link}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
