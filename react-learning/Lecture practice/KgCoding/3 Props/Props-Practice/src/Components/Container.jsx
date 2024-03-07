/* eslint-disable react/prop-types */
// import React from 'react'

function Container({ children }) {
  return (
    <div
      className="p-10 bg-slate-500 min-w-[300px]  w-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl
    "
    >
      {children}
    </div>
  );
}

export default Container;
