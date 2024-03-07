import { useState } from "react";
import ButtonContainer from "./Components/ButtonContainer";
import InputFiled from "./Components/InputFiled";

function Calculator() {
  const [calVal, setCalVal] = useState("0");

  const handleOnButtonClick = (ButtonData) => {
    if (ButtonData === "C") {
      setCalVal("");
    } else if (ButtonData === "DEL") {
      setCalVal("");
    } else if (ButtonData === "=") {
      const result = eval(calVal);
      const newResult = result.toFixed(4);
      setCalVal(newResult);
    } else {
      const newDisplayValue = calVal + ButtonData;
      setCalVal(newDisplayValue);
    }

    // setCalVal(ButtonData);
  };

  return (
    <>
      <div className="flex justify-center w-full overflow-hidden">
        <div className=" my-10 pb-10 w-[300px] xxs:w-[360px] xs:w-[400px] border border-[#eeeeee75] shadow-md shadow-[#eeeeee75] rounded-3xl bg-transparent">
          <InputFiled displayValue={calVal} />
          <ButtonContainer onButtonClick={handleOnButtonClick} />
        </div>
      </div>
    </>
  );
}

export default Calculator;
