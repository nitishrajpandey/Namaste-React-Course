/* eslint-disable react/prop-types */
// import React from 'react'

function Display({ DisplayValue }) {
  return (
    <div className="flex justify-center ">
      <input
        type="text"
        value={DisplayValue}
        readOnly
        className="w-full py-3 text-xl sm:text-2xl px-5 text-right bg-white rounded-2xl outline-none button-text-color display-border-color-shadow "
      />
    </div>
  );
}

export default Display;
