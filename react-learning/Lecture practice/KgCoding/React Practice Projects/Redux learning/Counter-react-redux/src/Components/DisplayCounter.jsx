// import React from 'react'

import { useSelector } from "react-redux";

function DisplayCounter() {
  // useselect ke help se woo value store se layte hai aur jab ve update hoga yaha pe woo value apne app change ho jayega
  const counter = useSelector((store) => store.counter);

  return (
    <div className="font-medium text-xl mb-10">DisplayCounter : {counter}</div>
  );
}

export default DisplayCounter;
