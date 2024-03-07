import { useState } from "react";
import { Heading, InputField, TodoItems } from "./Components";
import { todoData } from "./ContentData";

function App() {
  const [todoData, setTodoData] = useState([]);

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
