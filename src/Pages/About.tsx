import { useEffect } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import shashwat_portfolio_pic from "../Assets/shashwat_portfolio_pic.jpeg";
import { Link } from "react-router-dom";

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
      technologies: ["MySQL", "Postgres", "MongoDB", "DynamoDB"],
    },
    { category: "Cloud Services", technologies: ["AWS"] },
    { category: "Generative AI", technologies: ["AWS Bedrock", "OpenAI"] },
    { category: "Version Control", technologies: ["GitHub", "Bitbucket"] },
    {
      category: "Tools",
      technologies: [
        "Visual Studio",
        "VS Code",
        "xCode",
        "PgAdmin",
        "MySQL Workbench",
        "Git",
        "Postman",
      ],
    },
  ];

  const experienceData = [
    {
      company: "PwC US",
      logo: "http://www.pwc.com/etc/designs/pwc/css_common/image/404.gif", // You can use URLs or import images
      role: "Senior Associate",
      responsibilities: [
        "Worked on AWS Lambda, Connect, API Gateway, DynamoDB, S3, CloudFront, EventBridge",
        "Create and configure IVR Flows for Calls and Chat in Amazon Connect",
        "Integration of Amazon Connect CCP and Connect APIs into custom Contact Center application",
        "Integration of third parties application into custom Contact Center application",
      ],
      startDate: "August 2024",
      endDate: "Present",
    },
    {
      company: "Genpact India",
      logo: "https://www.genpact.com/content/experience-fragments/genpact/us/en/site/header0/header/_jcr_content/root/container_1299338043/image.coreimg.svg/1721268489491/genpact-logo.svg", // You can use URLs or import images
      role: "Consultant",
      responsibilities: [
        "Migration of old Web API application from .Net 4.5 to .Net 5 Web API",
        "Implement SAML2, and OIDC Authentication and Authorization by using OKTA and AWS Cognito",
        "Worked on AWS Lambda, Connect, API Gateway, DynamoDB, S3, CloudFront, EventBridge",
        "Integration of Amazon Connect CCP and Connect APIs into custom Contact Center application",
        "Integration of third parties application into custom Contact Center application",
        "Create and configure IVR Flows for Calls and Chat in Amazon Connect",
      ],
      startDate: "March 2022",
      endDate: "July 2024",
    },
    {
      company: "Agenty Analytics Pvt Ltd",
      logo: "https://cdn.agenty.com/images/icon/agenty-logo.png", // You can use URLs or import images
      role: "Software Engineer",
      responsibilities: [
        "Developed backend services using .NET, C#, MySQL, and write xUnit Test Cases",
        "Created Web Application Frontend in Angular",
      ],
      startDate: "December 2020",
      endDate: "February 2022",
    },
    {
      company: "Sigma Infosolutions Pvt Ltd",
      logo: "https://cdn-enmoh.nitrocdn.com/EwpHCdlXbcSkkIHtbaniSwqwTdlmGwIV/assets/images/optimized/rev-008abc2/www.sigmainfo.net/wp-content/uploads/2023/07/logo-wt.png",
      role: "Associate Software Engineer",
      responsibilities: [
        "Investigate, and develop Web API in .Net Core with MySQL, and MongoDB",
        "Created Web Application Frontend in Angular",
      ],
      startDate: "December 2018",
      endDate: "February 2020",
    },
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
            <div>
              <h1 className="text-center">Who am I?</h1>
              <p>
                I am Shashwat Prakash. I am a dedicated Software Engineer
                specializing in Web Development, Backend Development, and
                crafting Conversational AI Chatbots. With a strong foundation in
                Cloud platforms, I leverage my skills to create innovative and
                efficient solutions that drive business success and enhance
                customer engagement.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={shashwat_portfolio_pic}
                  height="auto"
                  className="rounded-circle mx-auto mt-1"
                />
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
            <Link to={"/contact"}>
              <Button variant="outline-info" size="lg" className="">
                Let's Connect
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-center">
                  Skills and Expertise
                </Card.Title>
                <div className="mt-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-2">
                      <Row>
                        <Col md={5} className="text-md-left text-start">
                          <h5>{skill.category}</h5>
                        </Col>
                        <Col md={7} className="text-md-left">
                          {/* <span>{" : "}</span> */}
                          {skill.technologies.length > 0 ? (
                            skill.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                pill
                                bg={getRandomColor()}
                                className="m-1 small"
                                style={{
                                  fontSize: "0.85rem",
                                  padding: "0.25rem 0.5rem",
                                }}
                              >
                                {tech}
                              </Badge>
                            ))
                          ) : (
                            <Badge
                              key={skill.category}
                              pill
                              bg={getRandomColor()}
                              className="m-1"
                            >
                              {skill.category}
                            </Badge>
                          )}
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title>Certifications</Card.Title>
                <div>
                  <div
                    className="badge-container"
                    data-iframe-width="100%"
                    data-iframe-height="270"
                    data-share-badge-id="ae7cb03b-7df9-46e1-81ee-f8da734250ca"
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                  <h4>AWS Certified Developer - Associate</h4>
                  <p>
                    I am an AWS Certified Developer - Associate, demonstrating
                    my proficiency in designing, deploying, and maintaining
                    applications on the Amazon Web Services (AWS) platform. This
                    certification validates my expertise in key AWS services and
                    best practices for developing scalable and highly available
                    applications. With this certification, I am equipped to
                    leverage AWS tools and technologies to drive innovation and
                    efficiency in cloud-based projects.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <h2 className="text-center mb-4">Professional Experience</h2>
          <p className="text-center mb-4">
            Throughout my career, I have been fortunate to work with leading
            companies, each providing unique opportunities to hone my skills and
            contribute to impactful projects. My journey in the tech industry
            has been marked by a commitment to excellence, continuous learning,
            and a passion for innovation.
            <p>
              Below is a detailed account of my professional experience with the
              organizations that have shaped my career.
            </p>
          </p>
          {experienceData.map((experience, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className={
                        experience.company === "Sigma Infosolutions Pvt Ltd" ||
                        experience.company === "Genpact India"
                          ? "bg-dark me-3"
                          : "me-3"
                      }
                      style={{ width: "80px", height: "50px" }}
                    />
                    <div>
                      <Card.Title className="mb-1">
                        {experience.company}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {experience.role}
                      </Card.Subtitle>
                    </div>
                  </div>
                  <Card.Text>
                    <ul>
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Footer className="text-muted">
                    {experience.startDate} - {experience.endDate}
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
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
            <Link to={"/contact"}>
              <Button variant="primary" className="m-2">
                Get in Touch
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
