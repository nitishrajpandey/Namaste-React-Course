// import React from 'react'

function Card() {
  return (
    <div
      className="border border-white  max-w-[300px] py-3 px-5 rounded-2xl shadow shadow-white hover:scale-105 duration-500 ease-in-out"
      style={{ backgroundColor: "#343541" }}
    >
      <h1 className="text-center text-lg pb-2">CARD</h1>
      <div className="flex flex-col items-center">
        <img
          className="w-[200px]  rounded-lg"
          src="https://cdn.pixabay.com/photo/2023/11/06/09/43/lotus-8369252_1280.jpg"
          alt="Lotus Flower img"
        />
        <h3 className="mt-2 text-[#76bf98]  text-center">LOtus</h3>
        <p className=" text-md font-normal">
          Elegant aquatic plant with radiant blooms, Lotus thrives in muddy
          waters, symbolizing purity, enlightenment, and resilience in various
          cultures worldwide.
        </p>
      </div>
      <div>
        <button className="mt-4">Next →</button>
      </div>
    </div>
  );
}

export default Card;
