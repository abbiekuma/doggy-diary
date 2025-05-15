import React, { useState } from "react";
import Item from "./Items";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), task: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  return (
    <div className="flex flex-col font-mainFont bg-mainBackground">
      <div className="bg-mainBackground p-6 rounded w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center font-primary text-mainT">
          To-Do List
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="rounded-xl border-4 border-mainT2d bg-mainT2 text-mainTl placeholder-mainTl font-secondary font-bold p-2"
          />
          <button
            onClick={addTodo}
            className=" font-primary rounded-xl border-4 border-mainT2 px-2 bg-mainTl text-mainT2d cursor-pointer hover:bg-mainT2d hover:text-mainTl ml-2 "
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <Item
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
              editTask={editTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
