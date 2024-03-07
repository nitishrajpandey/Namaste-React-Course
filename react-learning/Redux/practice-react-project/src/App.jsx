// import React from 'react'

import { Account, Bonus } from "./Components";

function App() {
  return (
    <div className="">
      <div className="flex flex-col gap-5 px-5">
        <h1 className="text-center font-bold text-4xl text-white">App</h1>
        <h2 className="font-semibold text-yellow-500">Current Amount : </h2>
        <h2 className="font-semibold text-yellow-500">Total Bonus : </h2>
      </div>
      <div className="mt-5">
        <Account />
        <Bonus />
      </div>
    </div>
  );
}

export default App;
