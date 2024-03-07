// import React from 'react'

import { useSelector } from "react-redux";
import { Account, Bonus } from "./Components";

function App() {
  const amount = useSelector((store) => store.amount.amount);
  const point = useSelector((store) => store.bonus.point);
  return (
    <div className="">
      <div className="flex flex-col gap-5 px-5">
        <h1 className="text-center font-bold text-4xl text-white">App</h1>
        <h2 className="font-semibold text-yellow-500">
          Current Amount : {amount}
        </h2>
        <h2 className="font-semibold text-yellow-500">Total Bonus : {point}</h2>
      </div>
      <div className="mt-5">
        <Account />
        <Bonus />
      </div>
    </div>
  );
}

export default App;
