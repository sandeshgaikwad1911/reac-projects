// /* eslint-disable no-unused-vars */
// import { createContext, useContext } from "react";

// export const TodoContext =  createContext({
//     todos: [
//         {
//             id: "",
//             todo: "",
//             isCompleted: false
//         }
//     ],
//     addTodo: (todo)=>{},
//     updateTodo: (id, todo)=>{},
//     deleteTodo: (id)=>{},
//     toggleComplete: (id)=>{}
// })

// // useTodo custom hook.. which return useContext
// export const useTodo = ()=>{
//     return useContext(TodoContext)
// }

// export const TodoProvider = TodoContext.Provider



// ----------------------------------------------------------------------------------------------------------------------------


import { createContext} from "react";
import { useState, useEffect } from "react";

export const TodoContext =  createContext({
    todos: [
        {
            id: "",
            todo: "",
            isCompleted: false
        }
    ],
})




// eslint-disable-next-line react/prop-types
const TodoProvider = ({children})=>{

    const [todos, setTodos] = useState([]); 

  // ------------------------------------------------------------------------------------------------------------------------
  const addTodo = (todo) => {
    // here, todo is expecting obj... thats how our initialVal,, this method will be called from TodoForm.jsx
    /* setTodos((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          ...todo,
        },
      ];
    }); */

    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);

    /* 
      1. each todo is Object .. which has id, todo, isCompleted property..
      2. we provide id here, isCompleted is false by default,
      3. todo will be provided through form
    */
  };
  // ------------------------------------------------------------------------------------------------------------------------
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
  };
  // ------------------------------------------------------------------------------------------------------------------------
  const updateTodo = (id, todo) => {
    setTodos(
      (prev) => prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
      // eachTodo is Object.. and has got id property(eachTodo.id), if(?) it matches with id, update that todo else(:) keep all todo as it is

      /* prev.map((eachTodo)=>{
        if(eachTodo.id === id){
          return todo
        }
        else{
          eachTodo
        }
      }) */
    );
  };
  // ------------------------------------------------------------------------------------------------------------------------
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };
  // ------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const todos = JSON.parse(window.localStorage.getItem("todos"));
    // inside local storage data is set as String ,,, we convert it into js Object.
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ------------------------------------------------------------------------------------------------------------------------

    return(
         <TodoContext.Provider value={{ todos, setTodos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
            {/* all this method will be availabel inside child component not on App component ...  useContext(TodoContext) */}
            {children}
        </TodoContext.Provider>
    )

}

export default TodoProvider