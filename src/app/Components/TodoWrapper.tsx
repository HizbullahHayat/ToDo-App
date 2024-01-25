"use client";
import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { TodoT } from "../Types/types";
import EditTodo from "./EditTodo";
import {TodoItems} from "./List";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodos] = useState<TodoT[]>([]);

  const addTodo = (todo:string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos)
  };
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id:string) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  const editTodo = (id:string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (id:string, task:string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div>
      {/* <h1>Get things done.......</h1> */}

      <Todo addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo key={todo.id} editTask={editTask} task={todo} />
        ) : (
          <TodoItems
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
