/* eslint-disable react/prop-types */
// import React from 'react'

function Button({ Data, handelOnClickButton }) {
  return (
    <>
      <button
        className={`px-5 py-3 button-border-color-shadow font-bold  rounded-3xl button-text-color ${
          Data === "=" && "px-16"
        }  `}
        onClick={handelOnClickButton}
        // onKeyDown={handelOnKeyDown}
      >
        {Data}
      </button>
    </>
  );
}

export default Button;
