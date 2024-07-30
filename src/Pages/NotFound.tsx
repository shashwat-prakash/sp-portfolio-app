import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Container className="text-center mt-5 mb-4">
      <h1 className="display-4">404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <p>
        It seems you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
      <Link to="/">
        <Button variant="primary">Go Back to Home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
