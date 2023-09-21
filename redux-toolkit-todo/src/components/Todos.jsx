import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {

  const { todos } = useSelector((state) => state.todos);
  // state means state of whole store


  const dispatch = useDispatch();

  return (
    <div className="mt-3 max-w-xl  w-full  mx-auto">
      {todos &&
        todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="my-2 bg-teal-500 flex justify-between px-2"
            >
              <input
                type="text"
                value={todo.text}
                className="w-full border-none  p-3 bg-teal-500 outline-none rounded-md text-white"
                readOnly
              />

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-2xl font-bold text-white "
              >
                X
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
