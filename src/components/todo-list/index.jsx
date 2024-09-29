import { useState, useRef } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Handling Complete
  const handleComplete = (index) => {
    setTodos((prevState) =>
      prevState.map((item, i) => {
        if (index === i) return { todo: item.todo, complete: !item.complete };

        return item;
      })
    );
  };

  // Handling Deletion
  const handleDelete = (index) => {
    setTodos((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking for duplicates. If the todo already exists, return alert.
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todo === input) return alert("Already exists");
    }

    setTodos((prevState) => [...prevState, { todo: input, complete: false }]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='todo-input'>Enter Todo: </label>
        <input
          type='text'
          id='todo-input'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>

      {todos?.map((todo, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "row" }}>
          <p>{todo.todo}</p>{" "}
          <button onClick={() => handleComplete(index)}>
            {todo.complete ? "Completed" : "Complete"}
          </button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
