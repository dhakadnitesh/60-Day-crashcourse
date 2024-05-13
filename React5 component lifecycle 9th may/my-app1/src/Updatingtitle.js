import { useState,useEffect } from "react";


function Updating(){
    let [title,settitle] = useState(1)


    useEffect(()=>{
        document.title = `App Application ${title}`

    },[title])

    return (
        <div className="div3">
          <h2>Document Title Updater</h2>
          <p>Count: {title}</p>
          <button onClick={function(){
            settitle(title + 1)
          }}>Increase</button>

        </div>
    )
}

export default Updating;