/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {removeTodo, toggleComplete, updateTodo} from '../features/todo/todoSlice'
import { useState } from "react";


const TodoItems = ({todo}) => {

    const dispatch = useDispatch();

    const [todoMsg, setTodoMsg] = useState(todo.text);

    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const edit = ()=>{
        dispatch(updateTodo({...todo, text: todoMsg}));
        setIsTodoEditable(false)
    }

  return (
    <div className="my-2  flex justify-between gap-1 bg-orange-500 rounded-lg p-1">

            <input type="checkbox"
              className="cursor-pointer"
              checked={todo.isCompleted}
              onChange={(()=>dispatch(toggleComplete(todo)))}
            />
            <input
                type="text"
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
                className={`w-full p-3  rounded-lg text-white  ${isTodoEditable ? " bg-teal-500 border rounded-2xl  border-red-700 outline-none": " bg-black"}
                ${todo.isCompleted ? "line-through" : ""}`}
                readOnly={!isTodoEditable}
              />
            
             <div className="flex gap-2 items-center">
                <button 
                      className="text-lg"
                      disabled={todo.isCompleted}
                      // when todo completed edit button is disabled
                      onClick={()=>{

                          if(isTodoEditable){
                            edit();
                          }
                          else{
                            setIsTodoEditable((prev)=>!prev)
                          }

                      }} 
                      
                >
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                <button
                    className="text-lg disabled:opacity-50"
                    onClick={() => dispatch(removeTodo(todo.id))}
                    disabled={!todo.isCompleted}
                    // if todo is not completed delete button remain disabled
                >
                    ❌
                </button>
                </div>
    </div>
  )
}

export default TodoItems