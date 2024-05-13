import './App.css';
import {useState} from "react"




function App() {
  let [count,setcount] = useState(0)

  function Handleincrease(){
    setcount(count + 1)

  }


  function Handledecrease(){
    setcount(count - 1)

  }




  return (
    <div className="div1">
     <h3>Counter</h3>
     <p>Count : {count}</p>
     <button onClick={Handleincrease}>Increase</button>
     <button onClick={Handledecrease}>Decrease</button>

      
      
    
    </div>
  );
}

export default App;
