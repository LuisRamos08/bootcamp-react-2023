import './basic.css';
const RenderTypes = () => {
  return (
    <div className="basic-render-container">
        <h1> Render Types</h1>
        <ul className="basic-render-list">
            <li>Number: {10}   👍</li>
            <li>String: {"Bienvenidos"}   👍</li>
            <li>String Vacío: {""}   👎</li>
            <li>Boolean true: {true}   👎</li>
            <li>Boolean false: {false}   👎</li>
            <li>Undefined: {undefined}   👎</li>
            <li>Null: {null}   👎</li>
            <li>Array: {[1,2,3]}   👍👎</li>
            <li>Array Anidado: {[1,[10, 20, 30],3]}   👍👎</li>
            <li>Array Objetos: {`{[1, {key: 'value'}, 3]}`}   💥</li>
            <li>Objetos: {`{key: 'value'}`}   💥</li>
        </ul>
    </div>
  )
}

export default RenderTypes