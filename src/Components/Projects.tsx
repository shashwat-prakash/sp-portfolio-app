import * as React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import hero_section_bg from "../Assets/hero_section_bg.jpg";
import project_management from "../Assets/project_management.png";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const images: Record<string, string> = {
    project_management: project_management,
  };

  const projects = [
    {
      title: "VenuePay",
      description:
        "An Admin portal for an e-commerce website, offering comprehensive visibility into all transactions, detailed product information, inventory management including the addition of new products, and real-time notifications of out-of-stock items.",
      image: "project1.jpg",
      link: "/portfolio/project-one",
    },
    {
      title: "Agenty",
      description:
        "Agenty is an ETL tool that enables the extraction of data from websites or web applications, transforms it to meet specific business requirements, and loads it into various destinations seamlessly.",
      image: "project2.jpg",
      link: "/portfolio/project-two",
    },
    {
      title: "SoftShed",
      description:
        "An advanced ERP application designed to streamline the management of expenses, income, projects, tasks, HRMS, and more. This versatile tool enhances operational efficiency and provides comprehensive oversight for various business functions.",
      image: "project3.jpg",
      link: "/portfolio/project-three",
    },
    {
      title: "Amazon Device Repair",
      description:
        "ADR (Amazon Device Repair) is a Chatbot Solution and Agent Desktop designed to support Customer Care Representatives (CSRs). This project streamlines customer interactions, enhancing efficiency and user experience by providing automated assistance and a robust interface for agents.",
      image: "project1.jpg",
      link: "/portfolio/project-one",
    },
    {
      title: "Zeta",
      description:
        "Zeta is a contact center application featuring an IVR self-service system and a customized Agent Desktop designed for Customer Care Representatives to enhance communication and customer support.",
      image: "project2.jpg",
      link: "/portfolio/project-two",
    },
    {
      title: "RevolOne",
      description:
        "RevolOne is a comprehensive contact center application that includes an IVR system, and an advanced chatbot solution to support thier Insuarance Agents and enhance overall communication and customer service.",
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
              <Card className="text-center h-100 tilt-card">
                {/* <Card.Img
                  variant="top"
                  src={project_management}
                  className="mx-auto mt-3"
                  style={{ width: "50px", height: "50px" }}
                /> */}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>

                  {/* <Button
                    disabled
                    variant="outline-primary"
                    href={project.link}
                  >
                    View Details
                  </Button>
                   */}
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
