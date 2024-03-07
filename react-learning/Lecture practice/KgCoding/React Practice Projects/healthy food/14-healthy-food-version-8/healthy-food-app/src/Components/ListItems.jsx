/* eslint-disable react/prop-types */
// import React from 'react'

import Item from "./Item";

function ListItems({ foodItems }) {
  const OnClickBuyButton = (Item) => console.log(`you bought ${Item} . `);
  return (
    <>
      <ul className=" time-border-color-shadow  rounded-xl">
        {foodItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            index={index}
            foodItems={foodItems}
            handelOnClickBuyButton={() => OnClickBuyButton(item)}
          />
        ))}
      </ul>
    </>
  );
}

export default ListItems;
