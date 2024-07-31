import * as React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
interface ISPNavbarProps {}

const SPNavbar: React.FunctionComponent<ISPNavbarProps> = (props) => {
  const location = useLocation();
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="custom-navbar sticky-top shadow"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand-link">
              <em>Shashwat</em>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className={
                  location.pathname === "/"
                    ? "active-link nav-link"
                    : "nav-link"
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "active-link nav-link"
                    : "nav-link"
                }
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                className={
                  location.pathname === "/services"
                    ? "active-link nav-link"
                    : "nav-link"
                }
              >
                Services
              </Nav.Link>
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
                className={
                  location.pathname === "/contact"
                    ? "active-link nav-link"
                    : "nav-link"
                }
              >
                Contact Us
              </Nav.Link>
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
