import React,{useState,useEffect} from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";




function Todolist() {



    const [Task, setTask] = useState(["study","sleep","eat","race"]);
    const [newTask, setnewTask] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [completed, setcompleted] = useState([])

    // Use effect to persist the theme in local storage
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      setIsDarkMode(storedTheme === 'dark');
    }, []);
  
    // Use effect to update the theme when it changes
    useEffect(() => {
      document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
  
    // Toggle the theme when the button is clicked
    const toggleTheme = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };


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

    function deletetask(index){

    const deletedtasks=Task.filter((_,i)=> i !==index)
    setTask(deletedtasks)


    }

    function  completedtask(index){


      if(newTask !==""){
        completedtask(task=>[...task, completedtask])
  }
    }

   

    



  return (
   
    <>
 <div className='main'>
  
       <button
        onClick={toggleTheme}
        className='toggler'>
      

       {isDarkMode ? <FaSun  className='symbol' /> : <FaMoon className='symbol'/>}
      </button>

      

     <div>
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
  onClick={()=>deletetask(index)}><ImCross />
  </button>

<button className='comp' 
  onClick={()=>completedtask(index)}><TiTick />
  </button>


</li>

      
    )}
    </ol>





    </div>

   </div>
    </>
  )
}

export default Todolist