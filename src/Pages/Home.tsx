import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero_section_bg from "../Assets/hero_section_bg.jpg";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  const skills = [
    {
      title: "Web Development",
      description:
        "Creating responsive, user-friendly websites using ReactJs and Angular.",
      icon: "🌐",
    },
    {
      title: "Backend Solutions",
      description:
        "Building robust and scalable backend systems with .NET, C#, Python, and databases like SQL and MongoDB.",
      icon: "🔧",
    },
    {
      title: "Conversational AI",
      description:
        "Developing intelligent Chatbots using Amazon Lex and other AI tools.",
      icon: "🤖",
    },
    {
      title: "Contact Center Solutions",
      description:
        "Integrating chatbots and AI solutions into contact center platforms like Amazon Connect to enhance customer support and engagement.",
      icon: "📞",
    },
    {
      title: "Generative AI Integrations",
      description:
        "Implementing Generative AI technologies to create more interactive and personalized user experiences.",
      icon: "💡",
    },
    {
      title: "Cloud Services",
      description:
        "Leveraging AWS for scalable and secure cloud solutions, including deployment, management, and optimization.",
      icon: "☁️",
    },
  ];

  const projects = [
    {
      title: "Project One",
      description: "Description for project one.",
      image: "project1.jpg",
      link: "/portfolio/project-one",
    },
    {
      title: "Project Two",
      description: "Description for project two.",
      image: "project2.jpg",
      link: "/portfolio/project-two",
    },
    {
      title: "Project Three",
      description: "Description for project three.",
      image: "project3.jpg",
      link: "/portfolio/project-three",
    },
  ];

  const testimonials = [
    {
      name: "Client One",
      feedback: "Great work on the project!",
      image: "client1.jpg",
    },
    {
      name: "Client Two",
      feedback: "Excellent support and communication.",
      image: "client2.jpg",
    },
    {
      name: "Client Three",
      feedback: "Highly recommend for AI solutions.",
      image: "client3.jpg",
    },
  ];

  useEffect(() => {
    document.title = "Shashwat | Home";
  }, []);

  return (
    <>
      <div className="hero-section">
        <Container>
          <Row className="text-center align-items-center justify-content-center">
            <Col md={8}>
              <h1>
                Innovative Web Development and Conversational AI Solutions
              </h1>
              <p>
                Empowering businesses with cutting-edge web solutions and
                AI-driven Customer Engagement.
              </p>

              <Link to={"about"}>
                <Button variant="primary" className="m-2">
                  Learn More
                </Button>
              </Link>
              <Link to={"contact"}>
                <Button variant="secondary" className="m-2">
                  Get in Touch
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="featured-skills">
        <h2 className="text-center">Featured Skills and Services</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>
                    {skill.icon} {skill.title}
                  </Card.Title>
                  <Card.Text>{skill.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="portfolio-highlights">
        <h2 className="text-center">Portfolio Highlights</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={hero_section_bg} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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
    </>
  );
};

export default Home;
