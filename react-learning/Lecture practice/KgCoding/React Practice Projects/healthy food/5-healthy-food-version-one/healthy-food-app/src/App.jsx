// import React from 'react'

import Heading from "./Components/Heading";
import ListItems from "./Components/ListItems";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden flex justify-center">
        <div className="my-20   max-w-[500px] card-border-color-shadow rounded-2xl sm:p-5 card-bg-color">
          <Heading />
          <ListItems />
        </div>
      </div>
    </>
  );
}

export default App;
