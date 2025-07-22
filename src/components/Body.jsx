import React, { useEffect, useState } from "react";
import Card, { withPromotedLabel } from "./Card";
import "./Body.css";
import "../utils/mockData";
import RES_DATA from "../utils/mockData";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function Body() {
  const ResCardWithPromotedLabel = withPromotedLabel(Card);
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&headers[]=access-control-allow-origin:https://food.pushkarkhirude.com"
    );
    const json = await data.json();

    //console.log(
    //  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //);

    //cards[1] or cards[3] or cards[4], try out both if undefined error occurs
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //state of search text box
  const [searchText, setSearchText] = useState("");

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="top-controls flex justify-between w-8/12 mx-auto ">
        <button
          className="filter-btn border rounded-xl text-lg px-1 m-4 cursor-pointer bg-amber-400 hover:bg-amber-200 active:bg-amber-400"
          onClick={() => {
            let newResList = resList.filter((res) => res.info.avgRating > 4.5);
            setFilteredResList(newResList);
          }}
        >
          Filter Top Rated
        </button>
        <div className="search p-1 m-2 ">
          <input
            type="text"
            className="search-box border rounded-lg p-1 focus:bg-amber-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn border rounded-xl  m-2 py-1 px-2 text-lg bg-amber-400 hover:bg-amber-200 active:bg-amber-400"
            onClick={() => {
              let newResList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(newResList);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="cards-container w-8/12 mx-auto flex justify-between">
        {filteredResList.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {"aggregatedDiscountInfoV3" in res?.info ? (
              <ResCardWithPromotedLabel resData={res} />
            ) : (
              <Card resData={res} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
