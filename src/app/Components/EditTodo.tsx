import React, { useState } from "react";

interface EditTodoProp {
  editTask: (value:string, id:string)=>void;
  task:{
    id:string,
    task:string
  }
}


export default function EditTodo({ editTask, task }:EditTodoProp) {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    editTask(value, task.id);

    console.log('submitting', value, task.id)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-white text-xl p-2 outline rounded-sm m-3 bg-zinc-800"
        type="text"
        placeholder="Update your todos...."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="p-3 bg-amber-600">Update Todo</button>
    </form>
  );
}
