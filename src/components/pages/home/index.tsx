import React from "react";
import Logo from "./logo/Logo";
import Restaurants from "./restaurants-display/Restaurants";
import Recomandations from "./restaurants-recomandations/Recomandations";

export const Home: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Logo />
      <Recomandations restaurants={data.restaurants} />
      <Restaurants restaurants={data.restaurants} />
    </>
  );
};

export default Home;
