import React from "react";

function SearchRestaurant({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <form autoComplete="off">
        <input
          required
          className="search-box"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Cauta restaurantul preferat"
        />
      </form>
    </div>
  );
}

export default SearchRestaurant;
