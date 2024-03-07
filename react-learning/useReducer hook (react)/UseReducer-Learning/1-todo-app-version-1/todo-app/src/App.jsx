// import { useState } from "react";
import { Heading, InputArea, Massages, TodoItems } from "./Components";
import TodoItemsContextProvider from "./Store/Todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <div className="w-full overflow-hidden p-5 sm:p-0 sm:flex sm:justify-center">
          <div className="max-w-[640px] card-border-color-shadow  my-10 p-8 rounded-3xl card-bg-color ">
            <Heading />
            <InputArea />
            <Massages />
            <TodoItems />
          </div>
        </div>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
