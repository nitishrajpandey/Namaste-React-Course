import { Heading, InputField, TodoItems } from "./Components";
import { todoData } from "./ContentData";

function App() {
  return (
    <>
      <div className=" overflow-hidden md:flex md:flex-col items-center">
        <div>
          <Heading />
          <InputField />
          <TodoItems Data={todoData} />
        </div>
      </div>
    </>
  );
}

export default App;
