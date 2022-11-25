import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addtodos } from "../store/reducer/todosSlice";

const Todos = () => {
    const [value, setValue]=useState("")
    const dispatch = useDispatch()

    const addTodosHandler=(e)=>{
        e.preventDefault()
dispatch(addtodos({value:value}), setValue(""))
    }
  return (
    <form onSubmit={addTodosHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Todos;
