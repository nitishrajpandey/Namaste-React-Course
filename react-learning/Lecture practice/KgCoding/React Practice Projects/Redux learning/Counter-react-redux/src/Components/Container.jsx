/* eslint-disable react/prop-types */
// import React from 'react'

function Container({ children }) {
  return (
    <div className="border border-black rounded-3xl my-20 bg-slate-200">
      {children}
    </div>
  );
}

export default Container;
