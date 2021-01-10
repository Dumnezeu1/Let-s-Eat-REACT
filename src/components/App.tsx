import React from "react";
import "./assets/dist/App.css";
import Routes from "./routes/Routes";

import data from "./data.json";

const App = () => {
  console.log(data);
  return (
    <div className="App">
      <Routes result={data} />
    </div>
  );
};

export default App;
