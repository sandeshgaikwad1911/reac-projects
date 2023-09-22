import {useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const Todos = () => {

  const { todos } = useSelector((state) => state.todos);
  return (
    <div className="mt-3 max-w-xl  w-full  mx-auto">
      {todos &&
        todos.map((todo) => {
          return (
            <div key={todo.id} >
              <TodoItems todo={todo}/>
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
