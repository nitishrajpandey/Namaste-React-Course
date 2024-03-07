/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { Data } from "../ContextData";

export const TodoItemsContext = createContext({
  todoData: [],
  addNewItem: () => {},
  DeleteItem: () => {},
});

const TodoItemsContextProvider = ({ children }) => {
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
    <TodoItemsContext.Provider value={{ todoData, addNewItem, DeleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
