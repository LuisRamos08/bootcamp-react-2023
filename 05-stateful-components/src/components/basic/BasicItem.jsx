import './basic.css';
const BasicItem = ({item}) => {
    console.log('RENDER ITEM')
  return (
    <div className='basic-item-container'>
        <h3>{item.name}</h3>
        <h3>{item.age}</h3>
    </div>
  )
}

export default BasicItem