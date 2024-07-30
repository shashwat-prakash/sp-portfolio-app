import * as React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SPFooter from "./SPFooter";
import SPNavbar from "./SPNavbar";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <SPNavbar />
      <Container fluid className="flex-grow-1  p-0">
        <Outlet />
      </Container>
      <SPFooter />
    </div>
  );
};

export default Layout;
