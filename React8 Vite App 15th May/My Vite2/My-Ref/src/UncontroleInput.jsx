import { useRef } from "react";

function UncontroleInput(){

    let UnInput = useRef(null)
    let disInput = useRef(null)

    function handlechange(){
        disInput.current.innerText = UnInput.current.value
    }


    return (
        <div className="div2">
             <h3>Uncontrolled Input</h3>
             <input  ref={UnInput}  type="text" placeholder="Type" onChange={handlechange} />
             <p>User Input: <span ref={disInput}></span></p>


          
        </div>
    )

}

export default UncontroleInput