import { useEffect } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  useEffect(() => {
    document.title = "Shashwat | About";
  }, []);

  const skills = [
    { category: "Web Development", technologies: ["ReactJs", "Angular"] },
    { category: "Backend Development", technologies: [".NET", "C#", "Python"] },
    { category: "Conversational AI", technologies: ["Amazon Lex", "Kore.AI"] },
    { category: "Contact Center Solutions", technologies: ["Amazon Connect"] },
    {
      category: "Database Management",
      technologies: ["MySQL", "Postgres", "MongoDB"],
    },
    { category: "Cloud Services", technologies: ["AWS"] },
    { category: "Generative AI", technologies: ["AWS Bedrock", "OpenAI"] },
  ];

  const badgeColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    // "light",
    "dark",
  ];

  const getRandomColor = () => {
    return badgeColors[Math.floor(Math.random() * badgeColors.length)];
  };

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
          <Col md={6} className="mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title>Skills and Expertise</Card.Title>
                <Card.Text>
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-1">
                      <h5 className="d-inline">{skill.category}</h5>
                      {skill.technologies.length > 0 ? (
                        skill.technologies.map((tech, i) => (
                          <h6 className="d-inline">
                            <Badge
                              key={i}
                              pill
                              bg={getRandomColor()}
                              className="m-1"
                            >
                              {tech}
                            </Badge>
                          </h6>
                        ))
                      ) : (
                        <h6 className="d-inline">
                          <Badge pill bg={getRandomColor()} className="m-1">
                            {skill.category}
                          </Badge>
                        </h6>
                      )}
                    </div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title>Professional Experience</Card.Title>
                <Card.Text>
                  <p>
                    With over 5+ years of experience in Web Development and
                    Conversational AI, I have worked on numerous projects that
                    involved creating scalable and robust solutions for clients.
                    My expertise in Cloud Services and AI technologies has
                    enabled me to deliver innovative and efficient solutions
                    tailored to meet specific business needs.
                  </p>
                  <p>
                    I have a strong background in developing and integrating
                    conversational AI and Chatbot solutions into Contact Center
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

      {/* <Container className="about-page">
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
            <Card className="text-center h-100">
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
            <Card className="text-center h-100">
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
      </Container> */}
    </>
  );
};

export default About;
