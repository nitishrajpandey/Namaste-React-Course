import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoData: [],
  addNewItem: () => {},
  DeleteItem: () => {},
});
