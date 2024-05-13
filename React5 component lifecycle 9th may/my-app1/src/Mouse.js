import  { useEffect, useState } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="div4">
      <h2>Mouse Position:</h2>
      <p>X: {position.x}, Y: {position.y}</p>
    </div>
  );
}

export default MouseTracker;
