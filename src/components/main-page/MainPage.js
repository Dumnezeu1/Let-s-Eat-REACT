import React from "react";
import Logo from "./logo/Logo";
import Slider from "./recomandation-slider/Slider";
import Restaurants from "./restaurants-display/Restaurants";
import Navbar from "./../navbar/Navbar";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantsPages from "./RestaurantsPages";

function MainPage() {
  const restaurants = [
    {
      id: 0,
      name: "barbeque",
      sortiments: "Blat, salam, sos, mozzarela",
      image: "bbq.jpg",
      items: [
        {
          name: "Pizza",
          description: "Blat, salam, sos, mozzarela",
          price: 23
        },
        { name: "Spaghete", description: "Paste, sos", price: 223 },
        { name: "Ciorba leguma", description: "Apa, legume", price: 13 }
      ]
    },
    {
      id: 1,
      name: "brutaria-paine",
      sortiments: "Paste, sos",
      image: "brutaria.jpg",
      items: [
        {
          name: "ewq",
          description: "Blat, salam, sos, mozzarela",
          price: 23
        },
        { name: "dsa", description: "Paste, sos", price: 223 },
        { name: "Ciorba fdasfas", description: "Apa, legume", price: 13 }
      ]
    },
    {
      id: 2,
      name: "Orezari",
      sortiments: "Apa, legume",
      image: "japanese.jpg",
      items: [
        {
          name: "vcxv",
          description: "Blat, salam, sos, mozzarela",
          price: 23
        },
        { name: "vcx", description: "Paste, sos", price: 223 },
        { name: "gsdag fdgfd", description: "Apa, legume", price: 13 }
      ]
    },
    {
      id: 3,
      name: "Restaurant natural",
      sortiments: "Apa, legume",
      image: "prim.jpg",
      items: [
        {
          name: "Pizza",
          description: "Blat, salam, sos, mozzarela",
          price: 23
        },
        { name: "Spaghete", description: "Paste, sos", price: 223 },
        { name: "Ciorba leguma", description: "Apa, legume", price: 13 }
      ]
    }
  ];

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

export default MainPage;
