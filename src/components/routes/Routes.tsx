import React from "react";

import Navbar from "./Navbar";
import Footer from "../footer/Footer";
import RestaurantsPages from "../pages/restaurants";
import AboutPage from "../pages/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Loading from "../utils/loading/Loading";
import NoMatch from "../pages/noMatch";

import Home from "../pages/home";

interface Props {
  result: {
    about: About;
    footer: Array<FooterProps>;
    restaurants: Array<RestaurantsProps>;
  };
}

interface RestaurantsProps {
  id: number;
  name: string;
  sortiments: string;
  image: string;
  adress: string;
  company_data: string;
  working_time: Array<RestaurantProgram>;
}

interface RestaurantProgram {
  day: string;
  open: string;
}

interface About {
  bannerTitle: string;
  bannerText: string;
  employees: Array<EmployeesProps>;
}

interface EmployeesProps {
  avatar: string;
  name: string;
  position: string;
  about: string;
}

interface FooterProps {
  name: string;
  info: string;
}

const Routes: React.FC<Props> = ({ result }) => {
  return result ? (
    <Router>
      <ScrollToTop>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Switch>
            <Route exact path={`/`} render={() => <Home data={result} />} />
            <Route
              exact
              path={`/about`}
              render={() => <AboutPage aboutData={result.about} />}
            />
            <Route
              exact
              path={`/restaurant/:id`}
              render={(props: any) => (
                <RestaurantsPages
                  restaurants={result.restaurants}
                  match={props.match}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer footerData={result.footer} />
      </ScrollToTop>
    </Router>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default Routes;
