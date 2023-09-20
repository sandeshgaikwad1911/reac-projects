/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext =  createContext({
    todos: [
        {
            id: "",
            todo: "",
            isCompleted: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

// useTodo custom hook.. which return useContext
export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider