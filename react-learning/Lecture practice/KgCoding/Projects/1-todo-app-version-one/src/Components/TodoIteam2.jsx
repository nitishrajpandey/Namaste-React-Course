import React from "react";

function TodoIteam2() {
  let TodoName = "Go to Collage";
  let TodoDate = "26/06/2021";
  return (
    <React.Fragment>
      <div className="flex md:flex-row flex-col  justify-between  items-center my-8">
        <div className="ml-5 w-36 text-center">
          <h1 className="font-semibold text-xl">{TodoName}</h1>
        </div>
        <div className=" ml-10 w-36 text-center">
          <h1 className="font-semibold text-xl">{TodoDate}</h1>
        </div>
        <button className="px-5 py-2 text-lg border-none rounded-2xl font-semibold bg-red-900 text-white outline-none active:scale-95 ">
          Delete
        </button>
      </div>
    </React.Fragment>
  );
}

export default TodoIteam2;
