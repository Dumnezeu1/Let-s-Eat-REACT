import React from "react";
import Spinner from "./spinner.gif";

function Loading() {
  return (
    <>
      <img
        src={Spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </>
  );
}

export default Loading;
