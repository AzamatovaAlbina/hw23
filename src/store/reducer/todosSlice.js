import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },

  reducers: {
    addtodos(state, action) {
      state.todos.push({
        id: Math.random().toString(),
        title: action.payload.value,
        completed: false,
      });
    },
    completedTodos(state, action) {
      state.todos = state.todos.map(
        (todo) => {
            if(todo.id === action.payload.id){

                todo.completed = !state.completed;
            }
            return todo
        }
        );
    },
    removeTodos(state, action) {
        const {id, completed} = action.payload
      if (completed) {
        state.todos = state.todos.filter(
          (todo) => todo.id !== id
        );
      }else{
        return state
      }
    },
  },
});

export const { addtodos, completedTodos, removeTodos } = todosSlice.actions;
export default todosSlice;
