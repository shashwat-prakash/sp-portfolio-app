import * as React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";

import projectsData from "../data/projects.json";

interface IProjectsProps {}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: string; // optional emoji or icon
}

const Projects: React.FunctionComponent<IProjectsProps> = () => {
  const projects: Project[] = projectsData as Project[];

  return (
    <>
      <Container className="portfolio-highlights" id="projects">
        <h2 className="text-center">
          <Nav.Link href="#projects">Project Highlights</Nav.Link>
        </h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center h-100 tilt-card">
                <Card.Body>
                  {project.icon && (
                    <div
                      style={{ fontSize: "2rem", marginBottom: "10px" }}
                      aria-hidden="true"
                    >
                      {project.icon}
                    </div>
                  )}
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
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
