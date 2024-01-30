import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TodoT } from "../Types/types";

interface TodoItemProp {
  task: TodoT,
  toggleComplete: (id:string)=> void,
  deleteTodo: (id: string) => void,
  editTodo: (id: string) => void
}

export const TodoForm:React.FC<TodoItemProp>=( {task,toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className="flex justify-end items-center justify-between cursor-pointer mt-3 text-white text-xl p-2 outline rounded-sm">
      <p className={`${task.completed ? `line-through text-red-600`:' no-underline '} `} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
      <div className="flex gap-2 ">
        <FaEdit onClick={()=>editTodo(task.id)}/>
        <MdDeleteForever onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  );
}
