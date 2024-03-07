// import React from 'react'

import { useDispatch } from "react-redux";

function Control() {
  const dispatch = useDispatch();

  const handelonclickAddition = () => {
    dispatch({
      type: "ADDITION",
    });
  };
  const handelonclickSubtraction = () => {
    dispatch({
      type: "SUBTRACTION",
    });
  };

  return (
    <div className="flex flex-wrap justify-between gap-5 mb-10">
      <button
        className="px-4 py-2 font-semibold rounded-2xl bg-green-500 text-white active:scale-95 duration-300 ease-in-out"
        onClick={handelonclickAddition}
      >
        Add(+1)
      </button>
      <button
        className="px-4 py-2 font-semibold rounded-2xl bg-red-500 text-white active:scale-95 duration-300 ease-in-out"
        onClick={handelonclickSubtraction}
      >
        Sub(-1)
      </button>
    </div>
  );
}

export default Control;
