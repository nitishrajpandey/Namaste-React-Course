import React from "react";
import ShemmerForHome from "../Shemmer/ShemmerForHome";
function Card({ fetchData }) {
  console.log(fetchData);
  if (fetchData === null) {
    return <ShemmerForHome />;
  }
  return (
    <div className="flex flex-col items-center mt-20 ">
      <div className="columns-3 md:columns-4   ">
        {fetchData.map((item) => (
          <div
            key={item.id}
            className="mb-5 rounded-lg bg-white overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <img className=" rounded-t-lg" src={item.thumbnail} />
              <h1 className="text-center text-black font-bold pb-2">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
