import {useRef, forwardRef} from 'react'


const MyInput = forwardRef( ({handleBlur}, ref)=>{
    return <input ref={ref} onBlur={handleBlur}/>
}
)


const ForwardRef = () => {
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
        <h2>ForqwardRef</h2>
        {/* <input ref={inputRef} onBlur={handleBlur}/> */}
        <MyInput
            ref={inputRef}
            handleBlur={handleBlur}
        />
        <button style={{margin:'10px'}} onClick={handleClick}>Focus the input</button>
    </>
  )
}

export default ForwardRef