import { useState } from "react";
import Container from "./Components/Container";
import ErrorMassage from "./Components/ErrorMassage";
import FoodItems from "./Components/FoodItems";
import InputBox from "./Components/InputBox";

// const foodIteams = [
//   "roti",
//   "Dal",
//   "Green Vegetable",
//   "chawl",
//   "Sugar",
//   "Candy",
//   "Lollypop",
// ];

// const foodIteams = [];

function App() {
  // let [TextToShow, setTextToShow] = useState("Food item enter by user : ");

  let [foodIteams, setFoodIteams] = useState([]);

  function onKeyDown(event) {
    if (event.key === "Enter") {
      let newFoodIteam = event.target.value;
      event.target.value = "";
      let newItem = [...foodIteams, newFoodIteam];
      setFoodIteams(newItem);
    }
    // setTextToShow(event.target.value);
  }

  return (
    <Container>
      <div className="w-full overflow-hidden flex">
        <div className="">
          <h1 className="text-5xl font-bold capitalize text-center text-[#2b142b]">
            Healthy Food
          </h1>
          <InputBox handelOnKeyDown={onKeyDown} />
          {/* <p className="text-white font-semibold text-xl py-2">{TextToShow}</p> */}
          <FoodItems items={foodIteams} />
          <ErrorMassage items={foodIteams} />
        </div>
      </div>
    </Container>
  );
}

export default App;
