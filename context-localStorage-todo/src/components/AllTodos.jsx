import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import TodoItems from "./TodoItems"

const AllTodos = () => {
    const {todos} =  useContext(TodoContext);
  return (
    <div className="w-full">
        {
            todos?.map((todo)=>{
                return(
                <div key={todo.id}>
                    <TodoItems todo={todo}/>
                </div>
                )
            })
        }
    </div>
  )
}

export default AllTodos