/* eslint-disable react/prop-types */
// import React from 'react'

function InputBox({ handelOnKeyDown }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="py-3 w-full rounded-md bg-slate-300"
        // onChange={handelGivenData}
        onKeyDown={handelOnKeyDown}
      />
    </div>
  );
}

export default InputBox;
