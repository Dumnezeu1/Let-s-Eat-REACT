import React, { useState, useEffect } from "react";
import "./css/App.css";
import Logo from "./components/logo/Logo";
import Restaurants from "./components/restaurants-display/Restaurants";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Recomandations from "./components/Recomandations";
import RestaurantsPages from "./components/RestaurantsPages";
import AboutPage from "./components/about/AboutPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  var restaurants = require("./components/restaurants.json");

  return (
    <Router>
      <Navbar />
      <Switch>
        <ScrollToTop>
          <Route
            exact
            path={`/`}
            render={props => (
              <div>
                <Logo />
                <Recomandations restaurants={restaurants} />
                <Restaurants restaurants={restaurants} />
              </div>
            )}
          />
          <Route
            exact
            path={`/about`}
            render={props => (
              <div>
                <AboutPage />
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
        </ScrollToTop>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
