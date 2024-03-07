// import React from 'react'

import Heading from "./Components/Heading";
import Time from "./Components/Time";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden flex justify-center ">
        <div className="max-w-[500px]  my-10 p-10 rounded-2xl  card-border-color-shadow card-bg-color ">
          <Heading />
          <Time />
        </div>
      </div>
    </>
  );
}

export default App;
