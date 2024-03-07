/* eslint-disable react/prop-types */
// import React from 'react'

import Item from "./Item";

function ListItems({ foodItems }) {
  return (
    <>
      <ul className=" time-border-color-shadow  rounded-xl">
        {foodItems.map((item, index) => (
          <Item key={index} item={item} index={index} foodItems={foodItems} />
        ))}
      </ul>
    </>
  );
}

export default ListItems;
