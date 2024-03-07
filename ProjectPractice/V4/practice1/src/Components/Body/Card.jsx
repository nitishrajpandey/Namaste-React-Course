import React from "react";
import ShemmerForHome from "../Shemmer/ShemmerForHome";
import NotFOund from "../NotFoundpage/NotFOund";
import { Link } from "react-router-dom";
function Card({ fetchData }) {
  console.log(fetchData);
  if (fetchData === null) {
    return <ShemmerForHome />;
  }
  if (fetchData.length === 0) {
    return <NotFOund />;
  }
  return (
    <div className=" mt-20 ">
      <div className="columns-3 md:columns-4 ">
        {fetchData.map((item) => (
          <Link to={"/products/" + item.id} key={item.id}>
            <div className="mb-5 rounded-lg bg-white overflow-hidden">
              <div className="flex flex-col gap-3">
                <img className=" rounded-t-lg" src={item.thumbnail} />
                <h1 className="text-center text-black font-bold pb-2">
                  {item.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;
