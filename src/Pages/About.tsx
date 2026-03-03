import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import shashwat_portfolio_pic from "../Assets/shashwat_portfolio_pic.jpeg";
import { aboutData, Skill, Experience } from "../data/aboutData";

const Projects = lazy(() => import("../Components/Projects"));
const Testimonials = lazy(() => import("../Components/Testimonials"));

const getRandomColor = (badgeColors: string[]) =>
  badgeColors[Math.floor(Math.random() * badgeColors.length)];

const aiSpecialties = [
  {
    icon: "🤖",
    title: "Agentic AI",
    description: "Build intelligent agents that reason and act autonomously",
  },
  {
    icon: "🧠",
    title: "Generative AI",
    description: "Leverage LLMs and foundation models for creative solutions",
  },
  {
    icon: "📚",
    title: "RAG Systems",
    description: "Knowledge-augmented retrieval for accurate AI responses",
  },
  {
    icon: "☎️",
    title: "Telephony & IVR",
    description: "Voice-enabled conversational AI and contact center solutions",
  },
];

const achievements = [
  { metric: "40%+", label: "Support Cost Reduction" },
  { metric: "10+", label: "Production Projects" },
  { metric: "6+", label: "Years Experience" },
  { metric: "AWS", label: "Certified Developer" },
];

const About: React.FC = () => {
  const { skills, experienceData, badgeColors } = aboutData;

  // typing effect for entire intro sentence
  const fullSentence =
    "I am Shashwat Prakash, a results-driven AI specialist with deep expertise in Generative AI, Agentic AI, RAG Systems, Telephony, and Conversational AI development.";
  const [typedSentence, setTypedSentence] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedSentence(fullSentence.slice(0, i + 1));
      i++;
      if (i >= fullSentence.length) {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.title = "Shashwat | Portfolio";

    // load Credly badge script once and clean up on unmount
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.onload = () => {
      console.log("Credly script loaded successfully.");
      const badgeContainer = document.querySelector(
        ".badge-container",
      ) as HTMLElement | null;
      if (badgeContainer) {
        const iframe = badgeContainer.querySelector("iframe");
        if (iframe) iframe.style.width = "100%";
      }
    };
    script.onerror = () => console.error("Error loading Credly script.");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Container className="about-page">
        {/* Hero Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "20px",
            padding: "60px 40px",
            color: "white",
            marginBottom: "60px",
            marginTop: "10px",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(102, 126, 234, 0.3)",
          }}
        >
          <img
            src={shashwat_portfolio_pic}
            height="120"
            width="120"
            className="rounded-circle mb-4"
            style={{ border: "4px solid white", objectFit: "cover" }}
            alt="Profile"
          />
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Conversational AI Expert
          </h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
            Generative AI | Agentic AI | RAG Systems | Telephony Solutions
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/contact">
              <Button
                style={{
                  background: "white",
                  color: "#667eea",
                  border: "none",
                  fontWeight: "bold",
                  padding: "12px 30px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Let's Connect
              </Button>
            </Link>
            <a href="#projects">
              <Button
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid white",
                  fontWeight: "bold",
                  padding: "12px 30px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                View My Work
              </Button>
            </a>
          </div>
        </div>

        {/* About Summary Section */}
        <Row className="mb-5">
          <Col md={12}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              {/* <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                Who am I?
              </h2> */}
              <h3
                style={{
                  fontSize: "1.6rem",
                  lineHeight: "1.8",
                  maxWidth: "900px",
                  margin: "0 auto",
                  color: "#2a69b6",
                  fontStyle: "italic",
                }}
              >
                {typedSentence}
                {typedSentence !== fullSentence && (
                  <span className="typing-cursor">|</span>
                )}
              </h3>

              <div
                style={{
                  maxWidth: "900px",
                  margin: "20px auto",
                  textAlign: "left",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                <p>
                  Over 6+ years, I've architected and deployed cutting-edge AI
                  solutions that transform customer experiences and drive
                  operational efficiency. My portfolio includes:
                </p>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: 0,
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    ✨ <strong>Agentic Chatbots</strong> — Autonomous systems
                    that reason, decide, and act with minimal human intervention
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    🎙️ <strong>Intelligent Voice Assistants</strong> —
                    Production-grade telephony solutions with natural
                    conversation capabilities
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    🔍 <strong>RAG Solutions</strong> — Knowledge-augmented
                    retrieval systems delivering accurate, contextual AI
                    responses
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    💼 <strong>Enterprise Integrations</strong> — Seamless AI
                    deployment across contact centers and customer support
                    platforms
                  </li>
                </ul>
                <p style={{ marginTop: "15px" }}>
                  <strong style={{ color: "#667eea" }}>Key Impact:</strong> My
                  solutions have reduced support costs by <strong>40%+</strong>,
                  powered <strong>10+ production projects</strong>, and been
                  featured in AWS re:Invent demonstrations. I'm passionate about
                  leveraging AI to build adaptive, scalable systems that
                  redefine what's possible in conversational technology.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Achievements Section */}
        <Row className="mb-5">
          <h2 className="text-center mb-5">Key Achievements</h2>
          {achievements.map((achievement, idx) => (
            <Col md={3} sm={6} key={idx} className="mb-4">
              <div
                style={{
                  textAlign: "center",
                  padding: "30px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "15px",
                  boxShadow: "0 5px 20px rgba(102, 126, 234, 0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 15px 40px rgba(102, 126, 234, 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 5px 20px rgba(102, 126, 234, 0.2)";
                }}
              >
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "white",
                    margin: "0 0 10px 0",
                  }}
                >
                  {achievement.metric}
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    marginBottom: 0,
                    fontWeight: "500",
                  }}
                >
                  {achievement.label}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* AI Specializations */}
        <Row className="mb-5">
          <h2 className="text-center mb-5">AI Specializations</h2>
          {aiSpecialties.map((specialty, idx) => (
            <Col md={3} sm={6} key={idx} className="mb-4">
              <div
                style={{
                  background: "white",
                  border: "2px solid #667eea",
                  borderRadius: "15px",
                  padding: "30px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  minHeight: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 15px 40px rgba(102, 126, 234, 0.3)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#764ba2";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#667eea";
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                  {specialty.icon}
                </div>
                <h4
                  style={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "#333",
                  }}
                >
                  {specialty.title}
                </h4>
                <p
                  style={{
                    color: "#666",
                    marginBottom: 0,
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  {specialty.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Skills & Certifications Section */}
        <Row className="my-5">
          <Col md={6} className="mb-4">
            <Card
              style={{
                borderRadius: "15px",
                border: "2px solid #667eea",
                boxShadow: "0 5px 20px rgba(102, 126, 234, 0.15)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Body style={{ flex: 1 }}>
                <Card.Title
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Skills and Expertise
                </Card.Title>
                <div className="mt-4">
                  {skills.map((skill: Skill, index: number) => (
                    <div key={index} className="mb-3">
                      <Row>
                        <Col md={5} className="text-start">
                          <h5 style={{ fontWeight: "bold", color: "#667eea" }}>
                            {skill.category}
                          </h5>
                        </Col>
                        <Col md={7} className="text-start">
                          {skill.technologies.length > 0 ? (
                            skill.technologies.map((tech: string) => (
                              <Badge
                                key={tech}
                                pill
                                bg={getRandomColor(badgeColors)}
                                className="m-1 small"
                                style={{
                                  fontSize: "0.85rem",
                                  padding: "0.35rem 0.65rem",
                                }}
                              >
                                {tech}
                              </Badge>
                            ))
                          ) : (
                            <Badge
                              key={skill.category}
                              pill
                              bg={getRandomColor(badgeColors)}
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
            <Card
              style={{
                borderRadius: "15px",
                border: "2px solid #667eea",
                boxShadow: "0 5px 20px rgba(102, 126, 234, 0.15)",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Body style={{ flex: 1 }}>
                <Card.Title
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Certifications
                </Card.Title>
                <div>
                  <div
                    className="badge-container"
                    data-iframe-width="100%"
                    data-iframe-height="270"
                    data-share-badge-id="af477280-84f0-4702-b34e-18b838820623"
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                  <h4 style={{ marginTop: "20px", color: "#333" }}>
                    AWS Certified Developer - Associate
                  </h4>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    I am an AWS Certified Developer - Associate, demonstrating
                    my proficiency in designing, deploying, and maintaining
                    applications on the Amazon Web Services (AWS) platform. This
                    certification validates my expertise in key AWS services and
                    best practices for developing scalable and highly available
                    applications.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Professional Experience Section */}
        <Row className="my-5">
          <h2 className="text-center mb-4" style={{ fontSize: "2rem" }}>
            Professional Experience
          </h2>
          <p
            className="text-center mb-5"
            style={{
              fontSize: "1.1rem",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto 40px",
            }}
          >
            Throughout my career, I have been fortunate to work with leading
            companies, each providing unique opportunities to hone my skills and
            contribute to impactful projects. Below is a detailed account of my
            professional experience.
          </p>
          {experienceData.map((experience: Experience, index: number) => (
            <Col md={6} key={index} className="mb-4">
              <Card
                style={{
                  borderRadius: "15px",
                  border: "2px solid #667eea",
                  boxShadow: "0 5px 20px rgba(102, 126, 234, 0.15)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 15px 40px rgba(102, 126, 234, 0.3)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 5px 20px rgba(102, 126, 234, 0.15)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <Card.Body className="flex-grow-1 d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className={
                        experience.company === "Genpac India"
                          ? "bg-dark me-3"
                          : "me-3"
                      }
                      style={{
                        width: "80px",
                        height: "48px",
                        objectFit: "contain",
                      }}
                    />
                    <div>
                      <Card.Title
                        style={{
                          marginBottom: "5px",
                          color: "#333",
                          fontWeight: "bold",
                        }}
                      >
                        {experience.company}
                      </Card.Title>
                      <Card.Subtitle
                        style={{
                          marginBottom: "5px",
                          color: "#667eea",
                          fontWeight: "500",
                        }}
                      >
                        {experience.role}
                      </Card.Subtitle>
                    </div>
                  </div>
                  <Card.Text
                    className="flex-grow-1"
                    style={{ color: "#666", fontSize: "0.95rem" }}
                  >
                    <ul>
                      {experience.responsibilities.map(
                        (responsibility: string, i: number) => (
                          <li key={i}>{responsibility}</li>
                        ),
                      )}
                    </ul>
                  </Card.Text>
                  <Card.Footer
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: "0",
                      color: "#999",
                      fontSize: "0.9rem",
                    }}
                  >
                    {experience.startDate} - {experience.endDate}
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Projects and Testimonials */}
        <Suspense fallback={<div>Loading components…</div>}>
          <Projects />
          <Testimonials />
        </Suspense>

        {/* Final CTA Section */}
        <Row className="my-5">
          <Col md={12}>
            <div
              style={{
                background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                borderRadius: "20px",
                padding: "50px 40px",
                color: "white",
                textAlign: "center",
                boxShadow: "0 10px 40px rgba(102, 126, 234, 0.3)",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                Let's Work Together
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "30px",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Whether you need a cutting-edge web
                application, an intelligent chatbot, or integration of
                generative AI technologies, I'm here to help.
              </p>
              <Link to="/contact">
                <Button
                  style={{
                    background: "white",
                    color: "#764ba2",
                    border: "none",
                    fontWeight: "bold",
                    padding: "12px 40px",
                    fontSize: "1.05rem",
                    cursor: "pointer",
                  }}
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
