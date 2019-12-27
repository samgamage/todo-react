import React from "react";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

export default TodoList;
