import { useState } from "react";

function Counter() {
  // let count = 4
  // function setCounter(){
  //     count=count+1
  //     console.log("the value of count is ",count);
  // }

  const [value, setValue] = useState(0);

  function addButton() {
    if (value == 100) {
      alert("you acchive the maximum value", value);
    } else {
      setValue(prevValue=>prevValue+1);
      setValue(prevValue=>prevValue+1);
      setValue(prevValue=>prevValue+1);
      setValue(prevValue=>prevValue+1);
      setValue(prevValue=>prevValue+1);
    }
  }

  function subButton() {
    if (value == 0) {
      alert("you acchive minimum value ", value);
    } else {
      setValue(prevValue=>prevValue-1);
      setValue(prevValue=>prevValue-1);
    }
  }

  return (
    <div className="">
      
      <div className="mb-20 flex justify-center">
        <h1 className=" text-4xl font-bold capitalize text-blue-900">
          Counter project
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="text-xl font-medium  border-2 border-black rounded-xl px-4 py-3 ">
          Counter <span className="font-bold text-2xl ">{value}</span>
        </div>
      </div>

      <div className="flex mt-10 gap-5">
        <button
          className="font-medium text-lg border-2 border-black rounded-xl px-4 py-3 active:scale-95 duration-500 ease-in-out"
          onClick={addButton}
        >
          Increment <span className="text-2xl font-bold">+</span>
        </button>

        <button
          className=" font-medium text-lg border-2 border-black rounded-xl px-4 py-3 active:scale-95 duration-500 active:ease-in-out "
          onClick={subButton}
        >
          Decrement <span className="font-bold text-2xl">-</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
