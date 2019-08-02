import React from "react";

export default function SortimentSelectBar({ restaurant, setFindSortiment }) {
  return (
    <div className="restaurant-sortiments">
      <div className="restaurant-menu">
        <div className="restaurant-align">
          {restaurant.categories.map(category => (
            <button
              key={category.name}
              className=" restaurant-item"
              onClick={() => {
                setFindSortiment(category.name);
              }}
            >
              {category.name}
            </button>
          ))}
          <button
            className=" restaurant-item"
            onClick={() => {
              setFindSortiment("");
            }}
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
}
