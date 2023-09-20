import "./App.css";
import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  // console.log('todos', todos)

  // ------------------------------------------------------------------------------------------------------------------------
  const addTodo = (todo) => {
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

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage your Todo
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
