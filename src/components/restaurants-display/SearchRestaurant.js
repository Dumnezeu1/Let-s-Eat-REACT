import React from "react";

function SearchRestaurant({ search, setSearch }) {
  return (
    <section>
      <h1 className="center">Cauta un restaurantul dupa preferinte!</h1>
      <div className="search-wrapper">
        <form autoComplete="off">
          <input
            required
            className="search-box"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cauta restaurant/sortiment"
          />
        </form>
      </div>
    </section>
  );
}

export default SearchRestaurant;
