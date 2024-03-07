import { Heading, InputArea, TodoItem1, TodoItem2 } from "./Components";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden p-5 sm:p-0 sm:flex sm:justify-center">
        <div className="max-w-[640px] border border-white my-10 p-8 rounded-xl shadow-sm shadow-white ">
          <Heading />
          <InputArea />
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </div>
    </>
  );
}

export default App;
