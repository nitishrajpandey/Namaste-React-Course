import { Heading, InputArea, TodoItems } from "./Components";
import { todoData } from "./ContextData";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden p-5 sm:p-0 sm:flex sm:justify-center">
        <div className="max-w-[640px] card-border-color-shadow  my-10 p-8 rounded-3xl card-bg-color ">
          <Heading />
          <InputArea />
          <TodoItems todoData={todoData} />
        </div>
      </div>
    </>
  );
}

export default App;
