// import React from 'react'

function ListItems() {
  let foodItems = [
    // "Daal",
    // "Sabzi",
    // "Saag",
    // "Chapati/Roti",
    // "Idli",
    // "Khichdi",
    // "Dry fruits",
  ];

  return (
    <>
      {foodItems.length === 0 && (
        <h1 className="text-center font-semibold text-xl">
          I am Still hungry.
        </h1>
      )}

      {/* {foodItems.length === 0 ? (
        <h1 className="text-center font-semibold text-xl">
          I am Still hungry.
        </h1>
      ) : null} */}

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
