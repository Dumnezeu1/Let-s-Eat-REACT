import React from "react";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchRestaurant: React.FC<Props> = ({ search, setSearch }) => {
  const restaurantSearchMessage = "Cauta un restaurantul dupa preferinte!";
  const restaurantSearchPlaceholder = "Cauta restaurant/sortiment";
  return (
    <section className="search">
      <h1>{restaurantSearchMessage}</h1>
      <div className="search-wrapper">
        <form autoComplete="off">
          <input
            required
            className="search-box"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={restaurantSearchPlaceholder}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchRestaurant;
