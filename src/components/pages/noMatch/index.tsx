import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  const location = useLocation();

  return (
    <div
      style={{
        textAlign: "center",
        height: "5vh",
        margin: "20% 0",
      }}
    >
      <h3>No match for {location.pathname}</h3>
    </div>
  );
};

export default NoMatch;
