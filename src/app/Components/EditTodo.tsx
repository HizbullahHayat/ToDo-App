"use client";
import React, { FormEvent, useState } from "react";

interface EditTodoProps {
  editTask: (value: string, id: string) => void;
  task: {
    id: string;
    task: string;
  };
}
export default function EditTodo({ editTask, task }: EditTodoProps) {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    editTask(value, task.id);

    console.log("Submitting:", value, task.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Edit your todos"
        // className="bg-zinc-400"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="bg-lime-600">
        Update Todos
      </button>
    </form>
  );
}
