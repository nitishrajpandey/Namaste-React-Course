// import React from 'react'

import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-items-store";
import TaskIncompleteMassage from "./TaskIncompleteMassage";
import WelcomeMassage from "./WelcomeMassage";

function Massages() {
  const { todoData } = useContext(TodoItemsContext);
  return (
    <>
      {todoData.length === 0 ? <WelcomeMassage /> : <TaskIncompleteMassage />}
    </>
  );
}

export default Massages;
