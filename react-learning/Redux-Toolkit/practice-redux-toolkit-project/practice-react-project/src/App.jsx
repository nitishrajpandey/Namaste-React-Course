// import React from 'react'

import { useSelector } from "react-redux";
import { Account, Bonus } from "./Components";

function App() {
  const point = useSelector((state) => state.bonus.point);
  const Amount = useSelector((state) => state.account.amount);
  return (
    <div className="">
      <div className="flex flex-col gap-5 px-5">
        <h1 className="text-center font-bold text-4xl text-white">App</h1>
        <h2 className="font-semibold text-yellow-500">
          Current Amount : {Amount}
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
