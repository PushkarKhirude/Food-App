import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ITEM_URL } from "../utils/constants";

function ItemList({ items }) {
  const dispatch = useDispatch();

  //console.log(items);

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
    //console.log(item);
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-b flex justify-between h-auto my-4"
        >
          <div className="item-description text-left m-3 w-8/12  items-baseline">
            <h2 className="item-name font-bold ">{item?.card?.info?.name}</h2>
            <p className="text-xs my-4 hidden md:block">
              {" "}
              {item?.card?.info?.description}{" "}
            </p>
            <span className="price text-xl mr-4">
              {" "}
              ₹
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}{" "}
            </span>
            <span className="ratings text-amber-400 text-xl mx-3">
              {" "}
              {item?.card?.info?.ratings?.aggregatedRating?.rating} ★{" "}
            </span>
          </div>

          <div className="item-img w-4/12 m-2 ">
            <img
              src={ITEM_URL + item?.card?.info?.imageId}
              alt="item-image"
              className="h-35 mx-auto rounded-md"
            />
            <button
              className="add-btn cursor-pointer border rounded-xl py-1 px-4 my-2 bg-amber-400 hover:bg-amber-200 active:bg-amber-400"
              onClick={() => handleAddItem(item)}
            >
              {" "}
              Add +{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
