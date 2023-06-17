
import { useState } from 'react';
import './counter.css';
const Counter = () => {

    const [counter, setCounter] = useState(0);

    console.log('------------------------------');
    console.log('RENDER');
    console.log('counter init render', counter);

    const handleSubtract = () => {
      counter > 0 && setCounter( counter - 1 )
    }
    
    const handleAdd = () => {
      
      console.log('-- Start ADD --')
      
      setCounter( counter + 1 )      
      console.log('imperativo 1', counter);
      
      setTimeout(()=>{
        setCounter( counter + 10 )
        console.log('timeout', counter)
      })
      
      
      setCounter( ( prevCounter )=> {
        const newCounter = prevCounter + 1;
        console.log('dentro funcional newCounter', newCounter );
        return newCounter;
      } )      
      console.log('funcional 1',counter);
      
      setCounter( ( prevCounter )=> {
        const newCounter = prevCounter + 1;
        console.log('dentro funcional newCounter', newCounter );
        return newCounter;
      } )      
      console.log('funcional 2',counter);
      
      
      setCounter( counter + 20 )
      console.log('imperativo 2',counter);
      
      
      console.log('final', counter);
      
      console.log('-- End ADD --')
      
      
      
    }
    

    return (
    <div className='counter-container'>
      <h1>COUNTER</h1>
      <div className='counter-number'>
        <h1>{counter}</h1>
      </div>
      <div className="counter-buttons">
        <button 
          className='btn btn-danger counter-button'
          onClick={handleSubtract}
          >
          -
        </button>
        <button 
          className='btn btn-success counter-button'
          onClick={handleAdd}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter