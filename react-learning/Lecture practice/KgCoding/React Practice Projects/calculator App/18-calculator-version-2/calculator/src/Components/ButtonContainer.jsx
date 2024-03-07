/* eslint-disable react/prop-types */
// import React from 'react'

import Button from "./Button";

function ButtonContainer({ ButtonData, handelOnClick }) {
  return (
    <>
      <div className="flex gap-5 px-4 xs:px-10 py-8 justify-evenly items-center flex-wrap   bg-transparent">
        {ButtonData.map((data, index) => (
          <Button
            key={index}
            Data={data}
            handelOnClickButton={() => handelOnClick(data)}
            // handelOnKeyDown={handelOnKeyDown}
          />
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
