import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { TodoT } from "../Types/types";
interface TodoItemProps {
  task: TodoT;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

export const TodoItems:React.FC<TodoItemProps>=(
  {task,
  toggleComplete,
  deleteTodo,
  editTodo}

) => {
  return (
    <div className="flex justify-between items-center rounded bg-slate-200">
      <p
        className={`${
          task.completed ? "line-through text-red-700" : "cursor-pointer"
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="flex gap-x-2">
        <FaEdit onClick={() => editTodo(task.id)} />
        <AiTwotoneDelete onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}
