// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
    let interval = setInterval(()=>{
      setCount((preCount)=>{
        if(preCount<10){
          return preCount+1
        }
        else{
          clearInterval(interval)
          return preCount
        }

      })
    },1000)

    function Cleanupfun(){
      clearInterval(interval)
    }
    return Cleanupfun

  
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
