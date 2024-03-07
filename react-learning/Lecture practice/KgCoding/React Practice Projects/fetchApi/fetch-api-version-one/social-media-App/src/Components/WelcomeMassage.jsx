/* eslint-disable react/prop-types */
// import React from 'react'

import { socialMedia } from "../Assets";

function WelcomeMassage({ onClickButton }) {
  return (
    <div className=" relative w-full h-full">
      <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center">
          <img
            className="w-[50px] sm:w-[100px] "
            src={socialMedia}
            alt="VBook logo"
          />
          <h1 className="font-semibold text-4xl sm:text-6xl text-[#00BD98]">
            VBook
          </h1>
        </div>
        <div className="flex justify-center mt-5 ">
          <button
            className=" w-max px-5 py-3 bg-[#343947] text-white font-medium rounded-xl active:scale-95 duration-300 ease-in-out"
            onClick={onClickButton}
          >
            Get posts from Server
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeMassage;
