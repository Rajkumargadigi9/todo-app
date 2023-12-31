import React from 'react'
import {RiDeleteBinLine} from "react-icons/ri"
import {AiOutlineCheckCircle} from "react-icons/ai"

export default function Todoitem(props) {
    const { todo, removeTodo , completeTodo} = props
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
        {todo.text} 
        <div className="iconsContainer">
        <RiDeleteBinLine  style={{ marginRight:7}} onClick={() => removeTodo(todo.id)}/>
        <AiOutlineCheckCircle onClick={() => completeTodo(todo.id)}/>
        </div>

    </div>
  )
}
