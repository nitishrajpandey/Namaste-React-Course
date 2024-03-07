// import React from 'react'

function Container({ children }) {
  return (
    <div className="flex justify-center mt-20">
      <div className="p-5 border border-[#695c5c] shadow-md shadow-[gray] max-w-[450px] flex flex-col gap-5 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default Container;
