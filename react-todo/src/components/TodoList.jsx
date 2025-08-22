import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: false },
    { id: 3, text: "Master Testing", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo.trim(), completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h1 className="text-xl font-bold mb-3">Todo List</h1>

      <form onSubmit={addTodo} className="flex gap-2 mb-3">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border rounded cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-600 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
