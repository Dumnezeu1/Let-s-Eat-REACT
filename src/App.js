import React from "react";
import "./css/App.css";

import Logo from "./components/logo/Logo";
import Slider from "./components/recomandation-slider/Slider";
import Restaurants from "./components/restaurants-display/Restaurants";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantsPages from "./components/RestaurantsPages";

function App() {
  var restaurants = require("./components/restaurants.json");

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path={`/`}
            render={props => (
              <div>
                <Logo />
                <Slider restaurants={restaurants} />
                <Restaurants restaurants={restaurants} />
              </div>
            )}
          />

          <Route
            exact
            path={`/restaurant/:id`}
            render={props => (
              <RestaurantsPages restaurants={restaurants} match={props.match} />
            )}
          />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
