import * as React from "react";
import { Spinner } from "react-bootstrap";

interface ISPLoadingProps {}

const SPLoading: React.FunctionComponent<ISPLoadingProps> = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default SPLoading;
