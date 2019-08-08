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
import Loading from "./components/loading/Loading";

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const json = "https://my-json-server.typicode.com/Dumnezeu1/Json/data";
      await fetch(json)
        .then(resp => resp.json())
        .then(res => {
          setData(res[0]);
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {data !== undefined && (
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
                    <Recomandations restaurants={data.restaurants} />
                    <Restaurants restaurants={data.restaurants} />
                  </div>
                )}
              />
              <Route
                exact
                path={`/about`}
                render={props => (
                  <div>
                    <AboutPage aboutData={data.about} />
                  </div>
                )}
              />
              <Route
                exact
                path={`/restaurant/:id`}
                render={props => (
                  <RestaurantsPages
                    restaurants={data.restaurants}
                    match={props.match}
                  />
                )}
              />
            </ScrollToTop>
          </Switch>
          <Footer footerData={data.footer} />
        </Router>
      )}
      {data === undefined && (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
}

export default App;
