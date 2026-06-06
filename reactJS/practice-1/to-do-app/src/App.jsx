/** @format */

import { useState } from "react";

function App() {
  const [todo, setTodo] = useState({ id: "", title: "", completed: false });
  const [todoList, setTodoList] = useState([]);

  function handleInputChange(e) {
    setTodo({ ...todo, title: e.target.value, id: crypto.randomUUID() });
  }
  function addTodo() {
    setTodoList([...todoList, todo]);
    setTodo({ id: "", title: "", completed: false });
  }

  // Complete specific task via uniquely identified id
  function completeTask(id) {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  // Delete specific task via uniquely identified id
  function deleteTask(id) {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }

  // Edit specific task via uniquely identified id
  function editTask(id) {
    const todoId = todoList.find((todo) => todo.id === id);
    setTodo({
      id: todoId.id,
      title: todoId.title,
      completed: todoId.completed,
    });
    deleteTask(id);
  }
  
  return (
    <div>
      <h1>To Do Application</h1>
      <input type="text" value={todo.title} onChange={handleInputChange} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>{" "}
            <button onClick={() => completeTask(todo.id)}>Done</button>{" "}
            <button onClick={() => editTask(todo.id)}>Edit</button>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
