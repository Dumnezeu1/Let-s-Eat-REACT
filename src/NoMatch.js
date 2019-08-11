import React from "react";

function NoMatch({ location }) {
  const style = {
    textAlign: "center",
    height: "5vh",
    margin: "20% 0"
  };
  return (
    <div style={style}>
      <h3>No match for {location.pathname}</h3>
    </div>
  );
}

export default NoMatch;
