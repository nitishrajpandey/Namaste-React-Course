// import React from 'react'

import { useRef } from "react";
import { useDispatch } from "react-redux";
function AdvanceControl() {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handelAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handelSubtract = () => {
    dispatch({
      type: "SUB",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      <input
        type="number"
        placeholder="Enter number"
        className="border border-blue-800 outline-none px-2 max-w-[120px] rounded-xl py-2 font-semibold text-center"
        ref={inputElement}
      />
      <button
        className="px-4 py-2 bg-sky-500 text-black font-medium outline-none rounded-xl active:scale-95 duration-300 ease-in-out"
        onClick={handelAdd}
      >
        Add
      </button>
      <button
        className="px-4 py-2 bg-red-800 text-white font-medium outline-none rounded-xl active:scale-95 duration-300 ease-in-out"
        onClick={handelSubtract}
      >
        Subtract
      </button>
    </div>
  );
}

export default AdvanceControl;
