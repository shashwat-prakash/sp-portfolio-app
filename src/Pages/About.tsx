import { useEffect } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import hero_section_bg from "../Assets/hero_section_bg.jpg";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  useEffect(() => {
    document.title = "Shashwat | About";

    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.onload = () => {
      console.log("Credly script loaded successfully.");
      // Adjust iframe width after script loads
      const badgeContainer = document.querySelector(
        ".badge-container"
      ) as HTMLElement;
      if (badgeContainer) {
        const iframe = badgeContainer.querySelector("iframe");
        if (iframe) {
          iframe.style.width = "100%";
        }
      }
    };
    script.onerror = () => {
      console.error("Error loading Credly script.");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
        <Row>
          <Col md={12}>
            <h1 className="text-center">Who am I?</h1>
            <p>
              I am Shashwat Prakash. I am a dedicated Software Engineer
              specializing in Web Development, Backend Development, and crafting
              Conversational AI Chatbots. With a strong foundation in Cloud
              platforms, I leverage my skills to create innovative and efficient
              solutions that drive business success and enhance customer
              engagement.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={hero_section_bg} height="500px" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <p>
              With over 5+ years of hands-on experience in Fullstack Web
              Development, coupled with a deep dive into the Contact Center
              domain for the past 2 years, I bring a unique blend of technical
              expertise and industry knowledge to the table.
            </p>
            <p>
              Specializing in C#, .NET, and ReactJS, I thrive on leveraging
              cutting-edge technologies to architect scalable solutions. My
              proficiency extends to harnessing the power of AWS services such
              as Lambda, Amazon Connect, LEX, S3, CloudFront, APIGateway, and
              Kinesis to drive business success.
            </p>
            <p>
              I have a proven track record of delivering tailor-made solutions,
              including intuitive Agent Desktops for contact centers and
              intelligent Chatbots that enhance customer interactions and
              streamline processes.
            </p>
            <p>
              As an AWS Certified Developer Associate, I am committed to
              continuous learning and staying ahead of the curve in cloud
              technology.
            </p>
            <p>
              Recently, I've embarked on a journey into the realm of Generative
              AI for Conversational Chatbots, exploring innovative approaches
              using AWS Bedrock and ChatGPT. I thrive on challenges and am
              passionate about pushing the boundaries of technology to create
              impactful solutions.
            </p>
            <p>
              Let's connect and explore how we can collaborate to drive
              innovation and elevate user experiences.
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
                <Card.Title>Certifications</Card.Title>
                <Card.Text>
                  <div
                    className="badge-container"
                    data-iframe-width="100%"
                    data-iframe-height="270"
                    data-share-badge-id="ae7cb03b-7df9-46e1-81ee-f8da734250ca"
                    data-share-badge-host="https://www.credly.com"
                  ></div>
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
    </>
  );
};

export default About;
