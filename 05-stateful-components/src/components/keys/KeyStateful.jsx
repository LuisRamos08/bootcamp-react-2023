import {useState, memo} from 'react'
import './keys.css';

const KeyStateful = ({item, itemKey}) => {
    const [isSelected, setIsSelected] = useState(false);
    console.log(item,itemKey);


    const handleSelect = (e) => {
        e.preventDefault();
        setIsSelected(!isSelected);
    }

    const selectedClass = isSelected ? 'item-selected' : '';

  return (
    <button
        className={`btn btn-${item.color} keys-item ${selectedClass}`}
        onClick={handleSelect}
    >
        {`${item.label} (${itemKey})`}
    </button>
  )
}

export default memo( KeyStateful )