import { useState } from 'react'
import './App.css'
import DomElements from './components/DomElements'
import ForwardRef from './components/ForwardRef'
import RenderCounter from './components/RenderCounter'
import Analytics from './components/Analytics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DomElements/> */}
      {/* <ForwardRef/> */}
      {/* <RenderCounter/> */}
      <Analytics/>
    </>
  )
}

export default App
