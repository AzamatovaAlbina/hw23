import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import TodosItem from "./TodosItem";

const TodosList = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => {
        return <TodosItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodosList;
