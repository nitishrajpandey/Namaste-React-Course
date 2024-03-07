// import React from 'react'

function Loading() {
  return (
    <>
      <div className=" relative w-full h-full ">
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="border-8 w-[100px] h-[100px] border-t-red-500 border-b-red-500 border-l-orange-500 border-r-yellow-500  animate-spin border-green-700 rounded-full"></div>
          <p className="mt-3 font-semibold text-3xl text-[#62A799] ">
            Loding....
          </p>
        </div>
      </div>
    </>
  );
}

export default Loading;
