import React, { useState, useEffect } from "react";
import useFetchApi from "../../Utils/useFetchApi";
import Card from "./Card";
import ShemmerForHome from "../Shemmer/ShemmerForHome";

function Home() {
  const data = useFetchApi();
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    if (data && data.products) {
      setFilteredData(data.products);
    }
  }, [data]);

  const handleOnClickFilter = () => {
    const filtered = data.products.filter((product) => product.rating > 4.6);
    setFilteredData(filtered);
  };

  const handleOnClickSearch = () => {
    const newData = data.products.filter((item) =>
      item.title.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handelonkeyDown = (event) => {
    if (event.key === "Enter") {
      const newData = data.products.filter((item) =>
        item.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredData(newData);
    }
  };

  if (!data) {
    return <ShemmerForHome />;
  }

  return (
    <div className="my-5 mx-5">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <input
            type="text"
            className="px-3 py-2 bg-white text-black rounded-lg font-semibold"
            onChange={(e) => setSearchData(e.target.value)}
            value={searchData}
            onKeyDown={handelonkeyDown}
          />
          <button
            className="bg-green-600 rounded-lg text-white px-3 font-semibold"
            onClick={handleOnClickSearch}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-white text-black rounded-xl font-semibold"
            onClick={handleOnClickFilter}
          >
            All top Rating
          </button>
        </div>
      </div>

      <div>
        <Card fetchData={filteredData} />
      </div>
    </div>
  );
}

export default Home;
