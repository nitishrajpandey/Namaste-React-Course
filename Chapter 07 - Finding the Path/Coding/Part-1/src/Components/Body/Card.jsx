import React from "react";
import { CDN_URL } from "../../utils/constants";

function Card({ restaurantList }) {
  return (
    <>
      <div className="flex justify-between flex-wrap gap-10 px-5 text-black ">
        {restaurantList.map((item) => (
          <div
            key={item.data.id}
            className="w-[300px] bg-[#F0F0F0] shadow-md shadow-gray-500 rounded-xl"
          >
            <div className="rounded-xl">
              <img
                className="rounded-t-xl"
                src={CDN_URL + item.data.cloudinaryImageId}
                alt=""
              />
            </div>
            <div className="flex  flex-col gap-3 px-3 ">
              <h1 className="font-bold mt-3 text-lg">{item.data.name}</h1>
              <p>{item.data.cuisines.join(", ")}</p>

              <p className="font-semibold">{item.data.avgRating} Stars</p>
              <h3>{" rupees " + item.data.costForTwo / 100 + " price"}</h3>
              <p>{item.data.slaString}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
