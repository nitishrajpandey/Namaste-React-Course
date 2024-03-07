import { useState } from "react";
import {
  Heading,
  ErrorMassage,
  ListItems,
  Container,
  InputBox,
} from "./Components";

import { foodData } from "./ContextData";

function App() {
  let [foodItems, setfoodItems] = useState(foodData);
  const onkeydown = (event) => {
    if (event.key === "Enter") {
      const newItems = event.target.value;
      event.target.value = "";

      const newFoodItems = [...foodItems, newItems];
      setfoodItems(newFoodItems);
    }
  };

  return (
    <>
      <Container>
        <div className="w-full overflow-hidden flex justify-center">
          <div className="my-20  w-[98%]  sm:max-w-[500px] card-border-color-shadow rounded-2xl sm:p-5 card-bg-color">
            <Heading />
            <InputBox handleOnKeyDown={onkeydown} />
            <ErrorMassage foodItems={foodItems} />
            <ListItems foodItems={foodItems} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
