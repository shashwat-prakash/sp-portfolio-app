import * as React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
interface ISPNavbarProps {}

const SPNavbar: React.FunctionComponent<ISPNavbarProps> = (props) => {
  const location = useLocation();
  return (
    <>
      <Navbar expand="lg" className="custom-navbar shadow">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="navbar-brand-link d-flex align-items-center"
              style={{ textDecoration: "none" }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: 10 }}
              >
                <circle cx="12" cy="12" r="12" fill="#667eea" />
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#000000"
                  fontFamily="Arial, Helvetica, sans-serif"
                >
                  SP
                </text>
              </svg>
              <span
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                }}
              >
                Shashwat
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end small"
          >
            <Nav className="ml-auto align-items-center">
              {/* <Nav.Link
                as={NavLink}
                to="/home"
                className={
                  location.pathname === "/home"
                    ? "active-link nav-link fs-6"
                    : "nav-link"
                }
              >
                Home
              </Nav.Link> */}
              {/* <Nav.Link
                as={NavLink}
                to="/"
                style={
                  location.pathname === "/"
                    ? {
                        color: "white",
                        background: "rgba(255,255,255,0.12)",
                        padding: "6px 10px",
                        borderRadius: 8,
                      }
                    : { color: "rgba(255,255,255,0.92)", padding: "6px 10px" }
                }
              >
                About
              </Nav.Link> */}
              {/* <Nav.Link
                as={NavLink}
                to="/services"
                className={
                  location.pathname === "/services"
                    ? "active-link nav-link fs-6"
                    : "nav-link"
                }
              >
                Services
              </Nav.Link> */}
              {/* <Nav.Link
                as={NavLink}
                to="/blogs"
                className={
                  location.pathname === "/blogs"
                    ? "active-link nav-link"
                    : "nav-link"
                }
              >
                Blogs
              </Nav.Link> */}
              <Nav.Link
                as={NavLink}
                to="/contact"
                style={
                  location.pathname === "/contact"
                    ? {
                        color: "#3b2e8a",
                        background: "white",
                        padding: "6px 12px",
                        borderRadius: 8,
                      }
                    : { color: "white", padding: "6px 10px" }
                }
              >
                <Button
                  variant="light"
                  style={{
                    borderRadius: 20,
                    padding: "6px 14px",
                    fontWeight: 600,
                  }}
                >
                  Hire Me
                </Button>
              </Nav.Link>
              {/* <Link to="/contact" className="ms-3">
                <Button
                  variant="light"
                  style={{
                    borderRadius: 20,
                    padding: "6px 14px",
                    fontWeight: 600,
                  }}
                >
                  Hire Me
                </Button>
              </Link> */}
              {/* <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Button variant="outline-primary" className="ml-3">
              Sign Up
            </Button>
            <Button variant="primary" className="ml-2">
              Login
            </Button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Shashwat
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "link-primary font-bold"
                    : "link-secondary font-bold"
                }
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </Navbar.Text>
            &nbsp;&nbsp;
            <Navbar.Text>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  isActive
                    ? "link-primary font-bold"
                    : "link-secondary font-bold"
                }
                style={{ textDecoration: "none" }}
              >
                About
              </NavLink>
            </Navbar.Text>
            &nbsp;&nbsp;
            <Navbar.Text>
              <NavLink
                to={"services"}
                className={({ isActive }) =>
                  isActive
                    ? "link-primary font-bold"
                    : "link-secondary font-bold"
                }
                style={{ textDecoration: "none" }}
              >
                Services
              </NavLink>
            </Navbar.Text>
            &nbsp;&nbsp;
            <Navbar.Text>
              <NavLink
                to={"contact"}
                className={({ isActive }) =>
                  isActive
                    ? "link-primary font-bold"
                    : "link-secondary font-bold"
                }
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default SPNavbar;
