import React, { useState } from "react";
import Card from "./Card";
import initialRestaurantList from "../../utils/mockData";

function Body() {
  const [restaurants, setRestaurants] = useState(initialRestaurantList);
  const [filterData, setFilterData] = useState("");

  const handleOnClick = () => {
    const newRestaurants = restaurants.filter(
      (item) => Number(item.data.avgRating) > 4
    );
    setRestaurants(newRestaurants);
  };

  const handleOnClickSearch = () => {
    const newData = initialRestaurantList.filter((item) =>
      item.data.name.toLowerCase().includes(filterData.toLowerCase())
    );
    setRestaurants(newData);
  };

  return (
    <div>
      <div className="my-10 mx-10">
        <div className="border border-white flex justify-between items-center gap-5 py-2 px-4 rounded-lg bg-white">
          <div className="flex gap-10">
            <input
              type="text"
              value={filterData}
              onChange={(e) => setFilterData(e.target.value)}
              className="w-full bg-white text-black text-xl py-2 border border-gray-500 outline-none rounded-2xl px-2"
            />
            <button
              className="text-black bg-green-500 px-5 rounded-2xl"
              onClick={handleOnClickSearch}
            >
              Search
            </button>
          </div>
          <div>
            <button
              className="text-black bg-green-400 px-3 py-2 rounded-xl"
              onClick={handleOnClick}
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
