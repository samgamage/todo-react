import React from "react";

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map(todo => (
        <div key={todo.id} style={{ display: "flex" }}>
          <li
            style={{
              textDecoration: todo.completed ? "line-through" : null
            }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.task}
          </li>
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
