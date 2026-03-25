import React,{useState} from "react"


function ToDoList(){
const [task,settask]=useState(["moh","hallo"]);
const [newtask,setnewtask]=useState("");

function handleinputchange(event){


    setnewtask(event.target.value)
}
function addtask(){
if(newtask.trim()!==""){
settask(t=>[...t,newtask])
setnewtask("")
}



}
function deletetask(index){

    const udpate=task.filter((_,i)=>i!==index)
    settask(udpate)
}
function up(index){
 if (index === 0) return; // already at top

  const newTasks = [...task]; // copy array

  // swap elements
  [newTasks[index], newTasks[index - 1]] =
    [newTasks[index - 1], newTasks[index]];

  settask(newTasks);

}





return(
   <div>
    <div className="Todo-list">
<h1>Todolist</h1>
<input
type="text"
placeholder="enter text"
value={newtask}
onChange={handleinputchange}







/>
<button className="addbutton "  onClick={addtask}> Add</button>

    </div>
  <ol>
{task.map((task,index)=>
<li key={index}><span className="text">{task}
    
    
    
    </span>
    
    <button className="DEL" onClick={()=>deletetask(index)}>DELETE</button>
      
    <button className="Up" onClick={  ()=>up(index)}>Up</button>
    
    
    
    </li>





)}


  </ol>
    </div>
)
}
export default ToDoList