import React, { useState } from "react";
import SearchRestaurant from "./SearchRestaurant";
import DisplayRestaurant from "./DisplayRestaurant";

function Restaurants({ restaurants }) {
  const [search, setSearch] = useState("");

  return (
    <section>
      <SearchRestaurant search={search} setSearch={setSearch} />
      <DisplayRestaurant search={search} restaurants={restaurants} />
    </section>
  );
}

export default Restaurants;
