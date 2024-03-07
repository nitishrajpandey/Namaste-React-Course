// import React from 'react'

import { useRef, useState } from "react";

function Account() {
  const [amount, setAmount] = useState(0);
  const inputElement = useRef();

  // increment by amount
  function handelIncrementByAmount() {
    if (inputElement.current.value > 0) {
      setAmount(amount + Number(inputElement.current.value));
      inputElement.current.value = "";
    }
  }

  // increment
  function handelIncrement() {
    setAmount(amount + 1);
  }

  // decrement

  function handeldecrement() {
    setAmount(amount - 1);
  }

  return (
    <div className="border border-black py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-white">Account Components</h2>
        <h1 className="text-center font-bold text-2xl text-yellow-500">
          Amount : ${amount}
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center mt-10">
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handelIncrement}
        >
          Increment +
        </button>
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handeldecrement}
        >
          Decrement -
        </button>
        <input
          type="number"
          className="px-3 py-2 outline-none rounded-md font-semibold"
          ref={inputElement}
        />
        <button
          className="px-3 py-2 bg-slate-500 text-white font-bold rounded-md "
          onClick={handelIncrementByAmount}
        >
          Increment By Amount +
        </button>
      </div>
    </div>
  );
}

export default Account;
