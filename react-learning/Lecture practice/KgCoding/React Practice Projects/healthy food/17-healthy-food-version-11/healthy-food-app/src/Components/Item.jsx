/* eslint-disable react/prop-types */
// import React from 'react'

function Item({
  item,
  index,
  foodItems,
  handelOnClickBuyButton,
  BolleanValue,
}) {
  console.log(BolleanValue);
  return (
    <>
      <li
        className={`border-b border-[gray] py-3 px-5 rounded-lg  ${
          index === foodItems.length - 1 ? "px-5 py-3 border-none" : ""
        } ${
          BolleanValue && "list-selected-bg-color duration-300 ease-in-out"
        } flex justify-between items-center `}
      >
        {item}
        <button
          className="px-5 py-2   rounded-md active:scale-95 duration-300 ease-in-out  card-border-color-shadow"
          onClick={handelOnClickBuyButton}
        >
          {BolleanValue ? "Delete" : "Buy"}
        </button>
      </li>
    </>
  );
}

export default Item;
