import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodos = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 max-w-xl  w-screen  mx-auto flex gap-1 justify-center"
    >    
        <input
          type="text"
          className="min-w-[85%] bg-gray-800 rounded outline-none text-gray-100 p-2 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      
      
        <button
          type="submit"
          className="min-w-[15%] text-white bg-indigo-600 border-none  p-2 focus:outline-none hover:bg-indigo-700 rounded"
        >
          Add Todo
        </button>

    </form>
  );
};

export default AddTodos;
