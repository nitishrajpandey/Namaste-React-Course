/* eslint-disable react/prop-types */
// import React from 'react'

import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-items-store";
import TodoItem from "./TodoItem";

function TodoItems() {
  const { todoData } = useContext(TodoItemsContext);

  return (
    <>
      {todoData.map((data, index) => (
        <TodoItem key={index} todoName={data.name} todoDate={data.date} />
      ))}
    </>
  );
}

export default TodoItems;
