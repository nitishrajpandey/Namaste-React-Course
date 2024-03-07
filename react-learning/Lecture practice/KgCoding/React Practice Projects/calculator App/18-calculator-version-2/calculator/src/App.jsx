import { useState } from "react";
import { Display, ButtonContainer } from "./Components";
import { ButtonData } from "./ContextData";
function App() {
  let [calValue, setCalValue] = useState("");

  const onClickButton = (data) => {
    if (data === "C") {
      setCalValue(" ");
    } else if (data === "DEL") {
      let newText = calValue.slice(0, -1);
      setCalValue(newText);
    } else if (data === "=") {
      let result = eval(calValue);
      result = result.toFixed(4);
      setCalValue(result);
    } else {
      let newData = calValue + data;
      setCalValue(newData);
    }
  };

  // const onKeyDown = (event) => {
  //   let pattern = /\d+|[+\-*/%=]|Enter/;
  //   console.log(event.key);
  //   if (event.key === pattern) {
  //     console.log(event.key);
  //     if (event.key === "C") {
  //       setCalValue(" ");
  //     } else if (event.key === "Enter") {
  //       let result = eval(calValue);
  //       result = result.toFixed(4);
  //       setCalValue(result);
  //     } else {
  //       console.log(event.key);
  //       let eventKey = event.key;
  //       let newkeys = calValue + eventKey;
  //       setCalValue(newkeys);
  //     }
  //   }
  // };

  return (
    <>
      <div className="w-full overflow-hidden flex justify-center my-20 ">
        <div className="max-w-[400px] card-border-color-shadow p-5 pb-0 rounded-3xl card-bg-color">
          <Display DisplayValue={calValue} />
          <ButtonContainer
            ButtonData={ButtonData}
            handelOnClick={onClickButton}
            // handelOnKeyDown={onKeyDown}
          />
          <p className="text-center  pb-1 button-text-color  text-xs ">
            Made By : Nitish raj
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
