import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css';
import { useState } from "react";

function App() {
  const [tasks,setTasks]= useState(
       
    [ {
         id: 1,
         text :'meeting at office',
         day :' 2 jan 2022'
     },
     {
         id: 2,
         text :'meeting at school',
         day :' 3 jan 2022'
     }
     , {
         id: 3,
         text :'meeting at college',
         day :' 4 jan 2022'
     }]
 
)
const onClick =()=>{
   setTasks(
    {
      id:5,
      text:'meeting at home'
    }
   
    
  )

}
const deleteTask =(id)=>{
  setTasks(tasks.filter((task)=>(task.id!==id)))
  console.log('dekete' ,id)
}

  return (
    <div className="container">
    <Header/>
    <Tasks tasks={tasks} onClick={onClick} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
