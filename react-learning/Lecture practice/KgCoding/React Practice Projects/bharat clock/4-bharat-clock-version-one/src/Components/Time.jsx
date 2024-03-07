// import React from 'react'
// import { useState, useEffect } from "react";

import { useState, useEffect } from "react";

function Time() {
  // let time = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className=" rounded-2xl my-10 p-3 sm:p-5 time-border-color-shadow">
        <div className="w-[250px] text-center font-semibold p-5 text-3xl time-text-color ">
          {time.toLocaleTimeString()}
        </div>
        <p className="text-center time-text-color">
          {time.toLocaleDateString()}
        </p>
      </div>
    </>
  );
}

export default Time;
