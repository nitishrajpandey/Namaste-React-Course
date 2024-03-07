// import React from 'react'

import { useSelector } from "react-redux";

function Display() {
  // subscribe the store
  const counter = useSelector((store) => store.counter);
  return (
    <p className="text-center text-xl">Counter current Value : {counter} </p>
  );
}

export default Display;
