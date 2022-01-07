import React from "react";
import Task from './Task'


const Tasks = ({tasks,onClick,onDelete}) => {

  return (
    <>
      {tasks.map((task) => (
          
        <Task  key = {task.id} task = {task} onDelete={onDelete}/>
        
        
      ))}
      <button onClick={onclick} >Add new task</button>
    </>
  );
};

export default Tasks;
