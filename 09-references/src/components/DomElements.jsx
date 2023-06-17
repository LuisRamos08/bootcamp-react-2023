import {useRef} from 'react'

const DomElements = () => {

    const inputRef = useRef(null)


    const handleClick = ()=> {
        console.log(inputRef)
        inputRef.current.focus();
        inputRef.current.placeholder = "ingrese se nombre";
    }

    const handleBlur = ()=> {
        inputRef.current.placeholder = "";
    }

    console.log(inputRef)

  return (
    <>
        <h2>DomElements</h2>
        <input ref={inputRef} onBlur={handleBlur}/>
        <button style={{margin:'10px'}} onClick={handleClick}>Focus the input</button>
    </>
  )


}

export default DomElements