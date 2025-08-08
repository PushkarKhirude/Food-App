import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantHeader from "./RestaurantHeader";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_URL + resId);
    const json = await data.json();

    console.log(json.data);
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cloudinaryImageId,
    locality,
    city,
    totalRatingsString,
    avgRating,
    cuisines,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (crd) =>
        crd?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  const { itemCards } = categories[0]?.card?.card;

  return (
    <div className="menu text-center">
      <RestaurantHeader
        name={name}
        cloudinaryImageId={cloudinaryImageId}
        locality={locality}
        city={city}
        totalRatingsString={totalRatingsString}
        avgRating={avgRating}
        cuisines={cuisines}
      />
      <ul>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() =>
              showIndex === index ? setShowIndex(null) : setShowIndex(index)
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
