import React from "react";

export default function SortimentSelectBar({
  restaurant,
  setFindSortiment,
  findSortiment
}) {
  return (
    <div className="restaurant-sortiments">
      <div className="restaurant-menu">
        <div className="restaurant-align">
          {restaurant.categories.map(category => (
            <button
              key={category.name}
              className={
                category.name === findSortiment ? "active" : "restaurant-item"
              }
              onClick={() => {
                setFindSortiment(category.name);
              }}
            >
              {category.name === findSortiment ? "> " : ""}

              {category.name}
            </button>
          ))}
          <button
            className={findSortiment === "" ? "active" : "restaurant-item"}
            onClick={() => {
              setFindSortiment("");
            }}
          >
            {findSortiment === "" ? "> " : ""}
            All
          </button>
        </div>
      </div>
    </div>
  );
}
