import React from "react";
import Card from "./Card";

function Body() {
  return (
    <div>
      <div className="my-10 w-[30%] mx-10">
        <div className="border border-white flex justify-between gap-5 py-2 px-4 rounded-lg bg-white">
          <input
            type="text"
            className="w-full bg-white text-black text-xl py-2 border border-gray-500 outline-none rounded-2xl px-2"
          />
          <button className="text-black bg-green-500 px-5 rounded-2xl">
            Search
          </button>
        </div>
      </div>
      <div className="">
        <Card />
      </div>
    </div>
  );
}

export default Body;
