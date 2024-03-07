// import React from 'react'

import Container from "./Components/Container";
import Control from "./Components/Control";
import DisplayCounter from "./Components/DisplayCounter";
import Heading from "./Components/Heading";

function App() {
  return (
    <>
      <div className="w-full flex justify-center">
        <Container>
          <div className="flex flex-col items-center  min-w-[450px]">
            <Heading />
            <DisplayCounter />
            <Control />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
