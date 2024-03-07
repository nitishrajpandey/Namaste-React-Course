import { useState } from "react";
import { Heading, InputArea, Massages, TodoItems } from "./Components";
import { Data } from "./ContextData";
import { TodoItemsContext } from "./Store/Todo-items-store";

function App() {
  let [todoData, settodoData] = useState(Data);

  const addNewItem = (newtodoName, newtodoDate) => {
    settodoData((curentValue) => {
      const newTodo = [
        ...curentValue,
        {
          name: newtodoName,
          date: newtodoDate,
        },
      ];
      return newTodo;
    });
  };

  const DeleteItem = (todoDeleteName) => {
    let newTodoItems = todoData.filter((item) => item.name !== todoDeleteName);
    settodoData(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider value={{ todoData, addNewItem, DeleteItem }}>
        <div className="w-full overflow-hidden p-5 sm:p-0 sm:flex sm:justify-center">
          <div className="max-w-[640px] card-border-color-shadow  my-10 p-8 rounded-3xl card-bg-color ">
            <Heading />
            <InputArea />
            <Massages />
            <TodoItems />
          </div>
        </div>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
