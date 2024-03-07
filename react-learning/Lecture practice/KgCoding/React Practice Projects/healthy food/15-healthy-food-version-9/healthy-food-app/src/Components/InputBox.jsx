/* eslint-disable react/prop-types */
// import React from 'react'

function InputBox({ handleOnChange }) {
  return (
    <div className="mb-10 flex justify-center">
      <input
        type="text"
        placeholder="Enter here.."
        className="sm:text-2xl font-normal py-2 px-5 rounded-2xl outline-none card-bg-color card-border-color-shadow  "
        onChange={handleOnChange}
      />
    </div>
  );
}

export default InputBox;
