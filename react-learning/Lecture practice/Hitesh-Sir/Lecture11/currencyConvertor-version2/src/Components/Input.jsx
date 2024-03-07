// import React from 'react'

function Input() {
  return (
    <div className="flex bg-white p-5">
      <div className="w-1/2">
        <label htmlFor="inputNumber" className="block">
          Labels
        </label>
        <input
          type="number"
          id="inputNumber"
          className=" outline-none bg-transparent"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="w-full">Currency Type</p>

        <option value="usd">usd</option>
      </div>
    </div>
  );
}

export default Input;
