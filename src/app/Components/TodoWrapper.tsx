"use client";
import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "./TodoForm";
import EditTodo from "./EditTodo";
import { TodoT } from "../Types/types";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodos] = useState<TodoT[]>([]);
  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((i) => (i.id === id ? { ...i, isEditing: !i.isEditing } : i))
    );
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((i) => i.id !== id));
  };
  const editTask = (task: string, id: string) => {
    setTodos(
      todos.map((i) =>
        i.id === id ? { ...i, task, isEditing: !i.isEditing } : i
      )
    );
  };

  return (
    <div>
      <h1 className='text-white text-center mb-4 text-3xl  font-bold '>Todos List</h1>
      <Todo addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo key={todo.id} editTask={editTask} task={todo} />
        ) : (
          <TodoForm
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
}
