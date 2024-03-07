/* eslint-disable react/prop-types */
function Item({ foodIteam, handleByButtonClicked }) {
  return (
    <li className="text-xl font-semibold py-3 border-b-2 border-b-black border-r-2 border-r-black border-l-2 border-l-black">
      {foodIteam}
      <button
        className="px-4 py-1 bg-orange-700 text-white rounded-lg float-right
      "
        onClick={handleByButtonClicked}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
