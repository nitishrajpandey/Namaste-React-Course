// import React from 'react'
import { ButtonData } from "../ContextData";
import Buttons from "./Buttons";
function ButtonContainer() {
  return (
    <>
      <div className="flex gap-5 px-4 xs:px-10 pt-2 pb-5 justify-evenly items-center flex-wrap  bg-transparent">
        {ButtonData.map((data, index) => (
          <Buttons key={index} ButtonData={data} />
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
