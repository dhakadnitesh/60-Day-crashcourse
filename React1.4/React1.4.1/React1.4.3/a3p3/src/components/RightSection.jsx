import { useContext } from "react";
import { BulbContext } from "../context/BulbContextProvider";

export default function RightSection() {
  const { isOn, switchOn, switchOff } = 
    /*complete the missing code*/
    useContext(BulbContext);
  

  return (
    <div className="right-section">
      <p>Right Section ( Bulb ) </p>
      <div className="light-bulb-container">
        <div className={`light-bulb ${isOn ? "on" : "off"}`}></div>
        <button
          onClick={
            
              /*complete the missing code*/
              switchOn
            
          }
        >
          SWITCH ON
        </button>
        <button
          onClick={
            
              /*complete the missing code*/
              switchOff
            
          }
        >
          SWITCH OFF
        </button>
      </div>
    </div>
  );
}
