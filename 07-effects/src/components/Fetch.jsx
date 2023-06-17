import {useState, useEffect} from 'react';


const url = "https://jsonplaceholder.typicode.com/users";

const Fetch = () => {

    const [users, setUsers] = useState([])

    console.log('RENDER');
    
    
    useEffect( ()=>{
        console.log('EFFECT');
        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                console.log('RESOLVE')
                setUsers(data)
            })
    }, []);




  return (
    <div>
        {console.log('VISTA')}
        <h2>Fetch</h2>
        <hr />
        <ul>
            {
                users.map( user => (
                    <li key={user.id}>
                        { user.name }
                    </li>
                ))
            }
        </ul>
    </div>

  )
}

export default Fetch