/* eslint-disable react/prop-types */
import Item from "./Item";

function FoodItems({ items }) {
  const handelButton = (item) => {
    console.log(`${item} bought `);
  };

  return (
    <div className="text-center mt-5">
      <ul>
        {items.map((item) => (
          <Item
            key={item}
            foodIteam={item}
            // handleByButtonClicked={() => console.log(`${item} bought `)}
            handleByButtonClicked={() => handelButton(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
