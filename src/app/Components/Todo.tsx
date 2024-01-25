'use client'
import React,{FormEvent, useState} from "react";

interface TodoProp {
  addTodo: (value: string)=>void
}
export default function Todo({addTodo}:TodoProp) {
    const[value, setValue]=useState('')

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();

        if(value){
        addTodo(value)
        setValue('')
        }
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todos"
        className="border-black rounded-sm"
        onChange={(e)=>setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="bg-lime-600">Add Todos</button>
    </form>
  );
}
