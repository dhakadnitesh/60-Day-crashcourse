import { useState } from "react";
import "./App.css";

function App() {
  let [input,setinput] = useState("")
  let [todo,settodo] = useState([])

  function handlechange(e){
    setinput(e.target.value)
  }

  function handleAdd(){
    settodo([...todo,input])
    setinput("")

  }


  return(
    <div className="div1">
      <input type="text" value={input} onChange={handlechange} />
      <button onClick={handleAdd}>Add Todo</button>
      <br></br>
      <ul>
        {todo.map((todo,i)=>(
          <li key={i}> {todo}</li>
        ))}
      </ul>
    </div>
  )
 
      

}

export default App;
