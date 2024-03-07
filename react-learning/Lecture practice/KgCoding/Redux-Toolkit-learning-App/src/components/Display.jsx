// import React from 'react'

import { useSelector } from "react-redux";
function Display() {
  // subscribe the store
  const { counterValue } = useSelector((store) => store.counter);
  return (
    <p className="text-center text-xl">
      Counter current Value : {counterValue}
    </p>
  );
}

export default Display;
