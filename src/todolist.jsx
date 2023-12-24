import React from 'react'
import { useState } from 'react'

function Todolist() {



    const [Task, setTask] = useState(["study","sleep","eat","race"]);
    const [newTask, setnewTask] = useState("");


    function handleInputchange(event){

        setnewTask(event.target.value);


    }


    function addtask(){
if(newTask !==""){
      setTask(task=>[...task, newTask])
}
else{
  alert("add task bro")
}

    }

    function deletetask(){

    }

    function  completedtask(index){


    }

  return (
   
    <>
     <div className='main'>
    <h1>Welcome to My To-Do-List App</h1>

    <div><input type="text"
    placeholder='add task to be added' 
    value={newTask}
    onChange={handleInputchange}/>
    <button 
    className='addbtn'
    onClick={addtask}>
    add task
    </button>
    </div>

    <ol>
      {Task.map((Task,index)=>
<li key={index}>
  <span className='text'>{Task}</span>
  <button className='del' 
  onClick={()=>deletetask(index)}>DELETE</button>

<button className='comp' 
  onClick={()=>completedtask(index)}>Completed</button>


</li>

      
    )}
    </ol>

   </div>
    </>
  )
}

export default Todolist