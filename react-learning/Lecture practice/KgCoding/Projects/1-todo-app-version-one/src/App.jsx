import { Heading, InputField, TodoIteam1, TodoIteam2 } from "./Components";

function App() {
  return (
    <>
      <div className=" overflow-hidden md:flex md:flex-col items-center">
        <div>
          <Heading />
          <InputField />
          <TodoIteam1 />
          <TodoIteam2 />
        </div>
      </div>
    </>
  );
}

export default App;
