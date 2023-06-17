import {useState} from 'react';
import "./keys.css";
import KeyStatelessItem from './KeyStatelessItem';
import KeyStateful from './KeyStateful';

const initialItems = [
    {
      id: 1,
      label: "Hacer las compras",
      color: "primary",
    },
    {
      id: 2,
      label: "Estudiar React",
      color: "success",
    },
    {
      id: 3,
      label: "Pagar impuestos 😠",
      color: "danger",
    },
  ];


  
  const KeyList = () => {

    const [items, setItems] = useState(initialItems)


    const handleChangeOrder = () => {
        setItems( items.toReversed() )
    }

    const handleReset = () => {
        setItems(initialItems)
    }


    const renderButtons = () => {
        return (
            <>
                <button
                    className='btn btn-warning keys-button'
                    onClick={handleChangeOrder}
                >
                    Change Order
                </button>
                <button
                    className='btn btn-secondary keys-button'
                    onClick={handleReset}
                >
                    Reset
                </button>
            </>
        )
    }

    const renderStatelessItems = () => {
        return items.map( (item, index) =>{
            const itemKey = item.id
            return (
                <KeyStatelessItem
                    key={itemKey}
                    item={item}
                    itemKey={itemKey}
                />
            )
        })
    }
    const renderStatefulItems = () => {
       console.log('---');
        return items.map( (item, index) =>{
            // const itemKey = item.id
            return (
                <KeyStateful
                    key={item.id}
                    item={item}
                    itemKey={item.id}
                />
            )
        })
    }





    return (
      <div className='keys-container'>
        <h1>KEYS</h1>
        <div className='keys-buttons'>
            {renderButtons()}
        </div>
        <div className='keys-list'>
            {/* {renderStatelessItems()} */}
            {renderStatefulItems()}

        </div>
      </div>
    )
  }
  
  export default KeyList