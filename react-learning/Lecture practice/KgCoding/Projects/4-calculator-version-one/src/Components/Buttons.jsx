/* eslint-disable react/prop-types */
// import React from 'react'

function Buttons({ ButtonData }) {
  return (
    <>
      <button
        className={`border border-[#ffffff36] text-center rounded-2xl font-bold text-white shadow-md shadow-[#ffffff54] px-5 py-3 ${
          ButtonData === "="
            ? "px-16 text-xl bg-[#ffa600d3] shadow-[#ffa60060] "
            : null
        } ${
          ButtonData === "C" ||
          ButtonData === "DEL" ||
          ButtonData === "%" ||
          ButtonData === "/" ||
          ButtonData === "*" ||
          ButtonData === "-" ||
          ButtonData === "+"
            ? "text-[#6dee0abd] "
            : null
        } active:scale-95 duration-300 ease-in-out  `}
      >
        {ButtonData}
      </button>
    </>
  );
}

export default Buttons;
