import { useRef } from "react"

function ChangeColorDiv(){
    let colorRef = useRef(null)

    function changecolor(){
        colorRef.current.style.backgroundColor = colorRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
    }

    return (
        <div>

            <h2 style={{marginLeft:"20px"}}>Change Color Div</h2>
            <div className="div3" ref={colorRef} style={{ width: '200px', height: '200px', backgroundColor: 'lightblue',marginLeft:"20px",textAlign:"center" }} onClick={changecolor}>Click The Button</div>

        </div>
    )

}

export default ChangeColorDiv