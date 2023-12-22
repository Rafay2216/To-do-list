import React from 'react'
import { useState } from 'react'

function Todolist() {



    const [Task, setTask] = useState("");
    const [newTask, setnewTask] = useState("");


    function handleInputchange(event){

        setnewTask(event.target.value);


    }


    function addtask(){

    }

    function deletetask(){

    }

    function  uptask(index){


    }


    function  downtask(index){



    }

  return (
   
    <>
    
    <h1>Welcome to My To-Do-List App</h1>

    <div><input type="text"
    placeholder='add task to be added' 
    value={newTask}
    onChange={handleInputchange}/>
    <button className='addbtn'></button>
    </div>
    </>
  )
}

export default Todolist