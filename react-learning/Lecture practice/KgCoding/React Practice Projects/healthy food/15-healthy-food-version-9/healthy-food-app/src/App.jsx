import { useState } from "react";
import {
  Heading,
  ErrorMassage,
  ListItems,
  Container,
  InputBox,
  InputDiplayBox,
} from "./Components";

import { foodItems } from "./ContextData";

function App() {
  let [inputText, setInputText] = useState("");
  const handleOnChangeText = (event) => {
    // console.log(event.target.value)
    inputText = event.target.value;
    setInputText(inputText);
  };

  return (
    <>
      <Container>
        <div className="w-full overflow-hidden flex justify-center">
          <div className="my-20  w-[98%]  sm:max-w-[500px] card-border-color-shadow rounded-2xl sm:p-5 card-bg-color">
            <Heading />
            <InputBox handleOnChange={handleOnChangeText} />
            <InputDiplayBox inputTextValue={inputText} />
            <ErrorMassage foodItems={foodItems} />
            <ListItems foodItems={foodItems} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
