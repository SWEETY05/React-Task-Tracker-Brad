import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete}) => {
    return (
        <div className='task'>
         <h3>{task.text} <FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)}/></h3>  
         <h5>{task.day}</h5>


        </div>
    )
}

export default Task
