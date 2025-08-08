import React from "react";
import { ITEM_URL } from "../utils/constants";

const RestaurantHeader = ({
  name,
  city,
  locality,
  cloudinaryImageId,
  totalRatingsString,
  avgRating,
  cuisines,
}) => {
  return (
    <div className="border-amber-600 border rounded-xl w-6/12 m-auto md:flex md:justify-center px-[3%] py-5 mt-5 mb-10">
      <div className="md:text-left ">
        <div className="font-bold text-3xl mb-10">{name}</div>
        <div className="font-light text-xs mb-2">
          {locality}, {city}
        </div>
        <div className="font-light text-xs text-amber-600">
          {avgRating}★ <span className="pl-4">{totalRatingsString}</span>
        </div>
      </div>
      <div className="hidden md:block ml-[20%]">
        <img
          src={ITEM_URL + cloudinaryImageId}
          alt="item-image"
          className="h-35 rounded-md"
        />
      </div>
    </div>
  );
};

export default RestaurantHeader;
