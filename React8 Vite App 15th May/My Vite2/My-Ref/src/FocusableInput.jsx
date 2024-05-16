import { useRef, useEffect } from "react";

function FocusInput() {
  let InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div className="div1">
      <h2>Focus Input</h2>

      <input
        ref={InputRef}
        type="text"
        placeholder="Type Here....."
        className="int"
      />
      
    </div>
  );
}

export default FocusInput;
