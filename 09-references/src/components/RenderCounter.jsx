import { useState } from 'react';
import { useRef } from 'react';

const RenderCounter = () => {

  const [counter, setCounter] = useState(0);
  const renderRef = useRef(0)

  const handleClick = ()=> {
    setCounter(prev => prev+1);
    setCounter(prev => prev+1);
}

renderRef.current = renderRef.current + 1;

console.log(renderRef.current)

  return (
    <div>
        <h2>RenderCounter</h2>
        <h1>{counter}</h1>
        <button onClick={handleClick}>Add</button>
        <h3>renderRef = {renderRef.current}</h3>
    </div>
  )
}

export default RenderCounter