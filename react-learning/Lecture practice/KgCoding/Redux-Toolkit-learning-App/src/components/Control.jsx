// import React from 'react'
import { useDispatch } from "react-redux";
import { CounterAction, privacyAction } from "../store";
function Control() {
  const dispatch = useDispatch();

  const handelIncrement = () => {
    dispatch(CounterAction.increment());
  };

  const handelDecrement = () => {
    dispatch(CounterAction.decrement());
  };

  const handelPrivacy = () => {
    dispatch(privacyAction.toggle());
  };
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      <button
        className="px-4 py-2 bg-blue-500 text-white font-medium outline-none rounded-xl active:scale-95 duration-300 ease-in-out"
        onClick={handelIncrement}
      >
        +1
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white font-medium outline-none rounded-xl active:scale-95 duration-300 ease-in-out"
        onClick={handelDecrement}
      >
        -1
      </button>
      <button
        className="px-4 py-2 bg-yellow-500 text-black font-medium outline-none rounded-xl active:scale-95 duration-300 ease-in-out"
        onClick={handelPrivacy}
      >
        Privacy Toggle
      </button>
    </div>
  );
}

export default Control;
