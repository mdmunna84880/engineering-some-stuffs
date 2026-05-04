import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");


  const handleTaskStatus = (id)=>{
    const index = tasks.findIndex((task)=>task.id === id);
    
    const modifiedTask = tasks[index];
    setTasks((prev)=>{
      const newTasks = prev.filter((item)=>item.id !== id);
      return [...newTasks, {...modifiedTask, isCompleted: !modifiedTask.isCompleted}]
    });
  }

  const addTask = ()=>{
    setTasks((prev)=>([...prev, {id: crypto.randomUUID(), title: value, isCompleted:false}]))
    setValue("");
  }

  const deleteTask = (id)=>{
    setTasks((prev)=>prev.filter((item)=>item.id !== id));
  }

  return ( <>
    <h1>To do List</h1>
    <input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
    <button onClick={addTask}>Add task</button>
    <div>
      {tasks.map(({id, title, isCompleted})=>{
        console.log(isCompleted)
        return <div key={id}>
        <h1>{title}</h1>
        <input type="checkbox" onChange={()=>handleTaskStatus(id)} checked={isCompleted}/>
        <button onClick={()=>deleteTask(id)}>Delete</button>
      </div>
      })}
    </div>
  </> );
}

export default App;