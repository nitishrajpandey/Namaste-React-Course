/* eslint-disable react/prop-types */
// import React from 'react'

import { socialMedia } from "../Assets";

function WelcomeMassage() {
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
      </div>
    </div>
  );
}

export default WelcomeMassage;
