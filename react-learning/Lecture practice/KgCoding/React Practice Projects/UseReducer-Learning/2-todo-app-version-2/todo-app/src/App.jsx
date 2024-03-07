import { useReducer } from "react";
import { Heading, InputArea, Massages, TodoItems } from "./Components";
import { Data } from "./ContextData";
import { TodoItemsContext } from "./Store/Todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodo = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodo = [
      ...currTodoItems,
      {
        name: action.payload.newtodoName,
        date: action.payload.newtodoDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodo = currTodoItems.filter(
      (item) => item.name !== action.payload.todoName
    );
  }

  return newTodo;
};

function App() {
  // let [todoData, settodoData] = useState(Data);

  const [todoData, dispatchTodoItems] = useReducer(todoItemsReducer, Data);

  const addNewItem = (newtodoName, newtodoDate) => {
    // settodoData((curentValue) => {
    //   const newTodo = [
    //     ...curentValue,
    //     {
    //       name: newtodoName,
    //       date: newtodoDate,
    //     },
    //   ];
    //   return newTodo;
    // });

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        newtodoName,
        newtodoDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const DeleteItem = (todoDeleteName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: todoDeleteName,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
