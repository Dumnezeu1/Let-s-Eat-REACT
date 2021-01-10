import React, { useState } from "react";
import SearchRestaurant from "./SearchRestaurant";
import DisplayRestaurant from "./DisplayRestaurant";

function Restaurants({ restaurants }: any) {
  const [search, setSearch] = useState<string>("");

  return (
    <section>
      <SearchRestaurant search={search} setSearch={setSearch} />
      <DisplayRestaurant search={search} restaurants={restaurants} />
    </section>
  );
}

export default Restaurants;
