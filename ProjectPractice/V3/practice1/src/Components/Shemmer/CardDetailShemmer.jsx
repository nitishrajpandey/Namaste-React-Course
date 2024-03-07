import React from "react";

function CardDetailShemmer() {
  return (
    <div className="flex justify-center">
      <div
        className="w-[80%] mt-20 shadow animate-pulse bg-gray-300"
        role="status"
      >
        <div>
          <button className="px-6 py-2 bg-orange-600 text-white rounded-lg font-sans font-semibold text-xl">
            Back
          </button>
        </div>
        <div>
          <div>
            <img className="w-full rounded-xl" src="" alt="" />
          </div>
          <h1 className="text-white text-center py-5 text-2xl font-bold">
            Lorem Ipsum
          </h1>
        </div>
        <div className="px-3 py-2">
          <h1 className="font-bold text-3xl pb-2 text-green-800">Details:</h1>
          <p className="pt-4 pb-10 text-xl w-[60%] bg-gray-300"></p>
          <div className="flex justify-between">
            <div>
              <ul className="list-disc flex flex-col gap-3 px-5 bg-gray-300">
                <li className="text-xl bg-gray-300">Brand:</li>
                <li className="text-xl bg-gray-300">Price:</li>
                <li className="text-xl bg-gray-300">Category:</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc flex flex-col gap-3 px-5 bg-gray-300">
                <li className="text-xl bg-gray-300">Rating:</li>
                <li className="text-xl bg-gray-300">Discount Percentage: %</li>
                <li className="text-xl bg-gray-300">Stock:</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 bg-gray-300">
            <h1 className="font-semibold text-3xl pb-6 text-red-500 bg-gray-300">
              Screen Shoot
            </h1>
            <div className="flex flex-col items-center mt-10 bg-gray-300">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                <div className="mb-5 rounded-lg bg-white overflow-hidden">
                  <div className="flex flex-col gap-3 bg-gray-300">
                    <img className="rounded-t-lg" src="" alt="" />
                  </div>
                </div>
                {/* Add more divs for additional placeholders */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetailShemmer;
