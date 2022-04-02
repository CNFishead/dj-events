import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
