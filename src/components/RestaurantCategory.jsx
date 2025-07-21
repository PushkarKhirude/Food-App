import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className="accordion-header shadow-md w-6/12 m-auto font-bold text-lg cursor-pointer my-2 bg-amber-50 flex justify-between"
        onClick={handleClick}
      >
        <span className="accordion-title text-xl p-1">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span className="text-amber-400 text-xl p-1">▼</span>
      </div>
      <div className="item-list w-6/12 m-auto">
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
