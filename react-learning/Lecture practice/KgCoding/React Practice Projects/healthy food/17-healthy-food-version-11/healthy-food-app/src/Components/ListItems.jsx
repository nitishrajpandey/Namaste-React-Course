/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";
import Item from "./Item";

function ListItems({ foodItems }) {
  let [activeItems, setactiveItems] = useState([]);

  const OnClickBuyButton = (item) => {
    if (activeItems.includes(item)) {
      const updatedItems = activeItems.filter(
        (currentItem) => currentItem !== item
      );
      setactiveItems(updatedItems);
    } else {
      const newItems = [...activeItems, item];
      setactiveItems(newItems);
    }
  };
  console.log(activeItems);
  return (
    <>
      <ul className=" time-border-color-shadow  rounded-xl">
        {foodItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            index={index}
            foodItems={foodItems}
            handelOnClickBuyButton={() => OnClickBuyButton(item, index)}
            BolleanValue={activeItems.includes(item)}
          />
        ))}
      </ul>
    </>
  );
}

export default ListItems;
