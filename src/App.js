import React, { useState, useEffect } from "react";
import AddTodo from './Components/AddTodo/AddTodo';
import Header from './Components/Header/Header';
import Todos from './Components/Todos/Todos';
import './App.css';
function App() {

  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="container">

      <Header setSearchQuery={setSearchQuery} />

      <Todos todos={todos} setTodos={setTodos} searchQuery={searchQuery} />

      <AddTodo todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
