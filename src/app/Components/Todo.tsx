"use client";
import React, { useState } from "react";

interface TodoProp {
  addTodo : (value : string)=>void
}


export default function Todo({ addTodo }:TodoProp) {
  const [value, setValue] = useState("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if (value) {
      addTodo(value);

      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} >
      <input
        className="p-3"
        type="text"
        placeholder="Enter your todos...."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="p-3 bg-amber-600">Add Todo</button>
    </form>
  );
}
