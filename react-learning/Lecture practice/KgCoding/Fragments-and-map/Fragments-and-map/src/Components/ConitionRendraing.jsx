function ConitionRendraing() {
  const foodIteams = [
    "roti",
    "Dal",
    "Green Vegetable",
    "chawl",
    "Sugar",
    "Candy",
    "Lollypop",
  ];

  //   const foodIteams = [];

  /*

if condtional rendering 
  if (foodIteams.length === 0) {
    return <h2>food item is empty</h2>;
  }

  */

  return (
    <>
      <div className="flex flex-col items-center relative top-[20vh] justify-center ">
        <h1 className="font-bold text-4xl my-5">Healthy Food</h1>

        {/* {foodIteams.length === 0 ? <h2>food item is empty</h2> : null}  ----   Terniory operator */}

        {/* {foodIteams.length === 0 && <h2>food item is empty</h2>}    ---- Logical operator  */}

        <ul>
          {foodIteams.map((item, index) => (
            <li
              className="font-semibold py-3 border-b-2 border-b-black border-r-2 border-r-black border-l-2 border-l-black px-3  text-center"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ConitionRendraing;
