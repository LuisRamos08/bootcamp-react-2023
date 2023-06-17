import {useState, useEffect} from 'react'

const Cleanup = () => {

  const [ isVisible, setIsVisible  ] = useState(true)

  console.log(isVisible);

  return (
    <div style={{width: "800px"}}>
        <h3>CleanUp</h3>
        <button onClick={ ()=> setIsVisible(!isVisible) } >Mostrar / Ocultar</button>
        {
            isVisible && <ColorElement/>
        }
        
    </div>
  )
}

export default Cleanup


const ColorElement = () => {

    const [color, setColor] = useState('orange');
    const [fake, setFake] = useState(true);

    console.log('RENDER');

    useEffect( ()=>{

        const onMouseMove = ( event ) => {
            if(event.clientX < window.innerWidth / 2 ){
                setColor('orange')
            }else{
                setColor('green')
            }            
        }
        
        console.log('EFECTO')
        window.addEventListener("mousemove", onMouseMove)

        return ()=>{
            console.log('CLEANUP')
            window.removeEventListener("mousemove", onMouseMove)
        }        
        
    }, [fake]);

    
    return (
        <>
        {console.log('VISTA')}
        <div style={{height: '600px', background: color }}></div>
        <button onClick={()=>setFake(!fake)}>FAKE</button>
        </>
    )

}
