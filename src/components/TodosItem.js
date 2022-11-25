import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { completedTodos, removeTodos } from "../store/reducer/todosSlice";
import styles from "./TodosItem.module.css";
const TodosItem = ({ title, id, completed }) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(completedTodos({ id }));
    
  };
const removeHandler = () => {
  dispatch(removeTodos({id: id, completed: completed}));
};
  return (
    <div className={styles.container}>
      <input type="checkbox" checked={completed} onChange={toggleHandler} />
      <p>{title}</p>
      {/* <button>edit</button> */}
    
      <button onClick={removeHandler}>delete</button>
    </div>
  );
};

export default TodosItem;
