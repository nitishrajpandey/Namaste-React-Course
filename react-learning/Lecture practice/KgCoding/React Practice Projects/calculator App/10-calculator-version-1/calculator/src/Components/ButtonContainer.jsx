/* eslint-disable react/prop-types */
// import React from 'react'

import Button from "./Button";

function ButtonContainer({ ButtonData }) {
  return (
    <>
      <div className="flex gap-5 px-4 xs:px-10 py-8 justify-evenly items-center flex-wrap   bg-transparent">
        {ButtonData.map((data, index) => (
          <Button key={index} Data={data} />
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
