import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



const CustomCard = ({buttonLabel, cardText}) => {
  return (
      <div className='custom-card'>
        <p> { cardText } </p>
        <button> { buttonLabel } </button>
      </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
<React.Fragment>
  {CustomCard({buttonLabel: 'Click aquí', cardText:'Texto de la tarjeta 1'})}
  {CustomCard({buttonLabel: 'Más info', cardText:'Texto de la tarjeta 2'})}
  {CustomCard({buttonLabel: 'Compre YA!', cardText:'Texto de la tarjeta 4'})}
  {CustomCard({buttonLabel: 'Ver', cardText:'Texto de la tarjeta 4'})}  
</React.Fragment>
)