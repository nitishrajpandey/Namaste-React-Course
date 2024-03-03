import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

function Body() {
  const [restaurants, setResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setResturants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handelOnClick = () => {
    let newRestaurants = restaurants.filter((item) => {
      return Number(item.info.avgRating) > 4;
    });
    setResturants(newRestaurants);
  };

  return (
    <div>
      <div className="my-10  mx-10">
        <div className="border border-white flex justify-between items-center gap-5 py-2 px-4 rounded-lg bg-white">
          <div className="flex gap-10">
            <input
              type="text"
              className="w-full bg-white text-black text-xl py-2 border border-gray-500 outline-none rounded-2xl px-2"
            />
            <button className="text-black bg-green-500 px-5 rounded-2xl">
              Search
            </button>
          </div>
          <div>
            <button
              className="text-black bg-green-400 px-3 py-2 rounded-xl"
              onClick={handelOnClick}
            >
              All top restaurants
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Card restaurantList={restaurants} />
      </div>
    </div>
  );
}

export default Body;
