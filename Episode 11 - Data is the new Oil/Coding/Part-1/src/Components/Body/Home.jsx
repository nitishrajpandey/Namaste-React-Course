// Home.js
import React, { useState } from "react";
import useFetchApi from "../../Utils/useFetchApi";
import Cards from "./Cards";
import ShemmerForHome from "../Shemmer/ShemmerForHome";
import useFilterData from "../../Utils/useFilterData";
import useOnlineStatus from "../../Utils/useOnlineStatus";

function Home() {
  const data = useFetchApi();
  const { filteredData, filterByRating, filterBySearch } = useFilterData(data);
  const [searchData, setSearchData] = useState("");

  const onlineStatus = useOnlineStatus();

  const handleOnClickFilter = () => {
    filterByRating();
  };

  const handleOnClickSearch = () => {
    filterBySearch(searchData);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      filterBySearch(searchData);
    }
  };

  if (!data) {
    return <ShemmerForHome />;
  }
  console.log("filter data", filteredData);

  return (
    <div className="my-5 mx-5">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <input
            type="text"
            className="px-3 py-2 bg-white text-black rounded-lg font-semibold"
            placeholder="Search..."
            onChange={(e) => setSearchData(e.target.value)}
            value={searchData}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-green-600 rounded-lg text-white px-3 font-semibold"
            onClick={handleOnClickSearch}
          >
            Search
          </button>
        </div>
        <div>
          <div className="px-4 py-2 bg-[#F0F0F0] text-black font-bold rounded-2xl">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </div>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-white text-black rounded-xl font-semibold"
            onClick={handleOnClickFilter}
          >
            All Top Rating
          </button>
        </div>
      </div>

      <div className="">
        <Cards fetchData={filteredData} />
      </div>
    </div>
  );
}

export default Home;
