// import React from "react";

import { useSelector } from "react-redux";
import {
  AdvanceControl,
  Container,
  Control,
  Display,
  Heading,
  Privacy,
} from "./components";

function App() {
  const privacy = useSelector((store) => store.privacy);
  console.log(privacy);
  return (
    <div>
      <Container>
        <Heading />
        {privacy ? <Privacy /> : <Display />}
        <Control />
        <AdvanceControl />
      </Container>
    </div>
  );
}

export default App;
