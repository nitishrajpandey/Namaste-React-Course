/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoItems({ Data }) {
  return (
    <>
      <div>
        {Data.map((item, index) => (
          <TodoItem key={index} TodoName={item.name} TodoDate={item.date} />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
