/* eslint-disable react/prop-types */
// import React from 'react'

function InputFiled({ displayValue }) {
  return (
    <>
      <div className="p-10 flex justify-center ">
        <input
          type="text"
          value={displayValue}
          readOnly
          className=" w-full rounded-2xl font-bold text-xl xs:text-2xl md:text-3xl py-5 px-5 text-right outline-none bg-transparent text-white"
        />
      </div>
    </>
  );
}

export default InputFiled;
