import { useState } from 'react';
import BasicItem from './BasicItem';
import './basic.css';

const initialUser = {
    name: 'Juan',
    age: 20
}


const Rerender = () => {
    const [ user, setUser ] = useState( initialUser )
    
    console.log('RENDER');
    console.log(user);
    
    const changeItem = () => {
        
        console.log('change');

        const newUser = {
            ...user,
            name: 'Cristian'
        }

        console.log('user cambiado',user);

        setUser( newUser )

    }



    return (
        <div className='basic-rerender-container'>
            <h1 className='basic-rerender-title'>Re Render</h1>

            <BasicItem 
                item={user}
            />
            <button 
            className="btn btn-primary"
            onClick={ changeItem }
            >Change User</button>
        </div>
  )
}

export default Rerender