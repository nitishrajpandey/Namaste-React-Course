import React from "react";
import Card from "./Card";
import { useState } from "react";
import initialRestaurantList from "../../utils/mockData";

function Body() {
  const [restaurants, setResturants] = useState(initialRestaurantList);
  const handelOnClick = () => {
    let newRestaurants = restaurants.filter((item) => {
      return Number(item.data.avgRating) > 4;
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
