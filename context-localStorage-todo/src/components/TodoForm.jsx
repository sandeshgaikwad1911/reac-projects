// import { useTodo } from "../context";
// import { useState } from "react";

// const TodoForm = () => {

//     const [todo, setTodo] = useState("")

//     const {addTodo} = useTodo()

//     const add = (e)=>{
//         e.preventDefault()
//         addTodo({todo: todo, isCompleted: false})
//         setTodo("")
//     }

//   return (
//     <form className="flex" onSubmit={add}>
//       <input
//         type="text"
//         placeholder="Write Todo..."
//         value={todo}
//         onChange={(e)=>setTodo(e.target.value)}
//         className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//       />
//       <button
//         type="submit"
//         className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default TodoForm;




import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {

    const [todo, setTodo] = useState("")
    // single Todo ... adding from form

    // const all = useContext(TodoContext)
    // console.log('all', all)

    const {addTodo} = useContext(TodoContext);
  
    const add = (e)=>{
        e.preventDefault();
        addTodo({todo: todo, isCompleted: false})
        setTodo("")
    }

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
