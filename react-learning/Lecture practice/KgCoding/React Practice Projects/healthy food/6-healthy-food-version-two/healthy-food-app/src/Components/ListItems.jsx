// import React from 'react'

function ListItems() {
  let foodItems = [
    "Daal",
    "Sabzi",
    "Saag",
    "Chapati/Roti",
    "Idli",
    "Khichdi",
    "Dry fruits",
  ];

  return (
    <>
      <ul className=" time-border-color-shadow  rounded-xl">
        {foodItems.map((item, index) => (
          <li
            className={`border-b border-[gray] py-3 px-5 ${
              index === foodItems.length - 1 ? "px-5 py-3 border-none" : ""
            } `}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListItems;
