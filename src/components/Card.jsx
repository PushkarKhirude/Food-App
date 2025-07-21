import React from "react";
import "./Card.css";
import { CDN_URL } from "../utils/constants";

function Card({ resData }) {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla: { deliveryTime },
  } = resData.info;

  return (
    <div className="card my-4 hover:bg-amber-100 active:bg-amber-300">
      <img
        className="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-img"
      />
      <h3 className="font-bold my-2">{name}</h3>
      <h4 className="my-1 text-amber-400">{avgRating} ★</h4>
      <h4>ETA: {deliveryTime} mins</h4>
    </div>
  );
}

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-amber-400 rounded-md my-4 px-1">
          {props?.resData?.info?.aggregatedDiscountInfoV3.header +
            " " +
            props?.resData?.info?.aggregatedDiscountInfoV3.subHeader}
        </label>
        <Card {...props} />
      </>
    );
  };
};

export default Card;
