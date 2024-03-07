/* eslint-disable react/prop-types */
// import React from 'react'

function Button({ Data }) {
  return (
    <>
      <button className="px-5 py-3 button-border-color-shadow font-bold  rounded-3xl button-text-color ">
        {Data}
      </button>
    </>
  );
}

export default Button;
