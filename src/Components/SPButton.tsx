import * as React from "react";
import { Button } from "react-bootstrap";

interface ISPButtonProps {
  name: string;
  variant: string;
  size: string;
  onClick: any;
}

const SPButton: React.FunctionComponent<ISPButtonProps> = ({
  variant,
  size,
  name,
}) => {
  return (
    <>
      <Button variant={variant} size="lg">
        {name}
      </Button>
    </>
  );
};

export default SPButton;
