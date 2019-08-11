import React from "react";

function SearchRestaurant({ search, setSearch }) {
  const restaurantSearchMessage = "Cauta un restaurantul dupa preferinte!";
  const restaurantSearchPlaceholder = "Cauta restaurant/sortiment";
  return (
    <section>
      <h1 className="center">{restaurantSearchMessage}</h1>
      <div className="search-wrapper">
        <form autoComplete="off">
          <input
            required
            className="search-box"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={restaurantSearchPlaceholder}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchRestaurant;
