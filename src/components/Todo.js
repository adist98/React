// todos will have 3 min element
// check box
// task
//delete button

import React from "react";

function Todo({ todo }){
  return (
      <div style = {{display: "flex"}}>
      <input type="checkbox"></input>
      <li 
      style = {{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null
      }}>{todo.task}</li>
      <button>X</button>
      </div>
      // return can not RETURN more than on element.
      // wrap it in div to solve this issue

  )
}

export default Todo;