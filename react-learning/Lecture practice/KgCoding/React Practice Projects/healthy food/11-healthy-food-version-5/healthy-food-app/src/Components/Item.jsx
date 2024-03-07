/* eslint-disable react/prop-types */
// import React from 'react'

function Item({ item, index, foodItems }) {
  return (
    <>
      <li
        className={`border-b border-[gray] py-3 px-5 ${
          index === foodItems.length - 1 ? "px-5 py-3 border-none" : ""
        } `}
      >
        {item}
      </li>
    </>
  );
}

export default Item;
