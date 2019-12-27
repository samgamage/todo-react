import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo app</p>
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
