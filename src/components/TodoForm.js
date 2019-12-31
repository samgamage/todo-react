import React, { useState } from "react";
import uuid from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: 0,
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
