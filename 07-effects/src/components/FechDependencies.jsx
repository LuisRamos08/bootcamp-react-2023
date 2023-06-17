import {useState, useEffect} from 'react'

const FechDependencies = () => {

    const [ user, setUser] = useState({})
    const [ posts, setPosts] = useState([])

    const getUserById = async( userId ) => {
        console.log(userId);
        
        // Promise
        // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //     .then( (res)=>res.json())
        //     .then( (newUser) => setUser(newUser));

        //Await
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const newUser = await res.json();
        setUser(newUser)
        
        // IIFE
        // (async()=>{
        //     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //     const newUser = await res.json();
        //     setUser(newUser)
        // })()
            
    }


    const getPostsByUserId = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then( (res)=>res.json() )
            .then( (newPosts) => setPosts(newPosts));
    }

    const getRandomId = () => Math.ceil(Math.random()*10);



    useEffect(()=>{
       getUserById(1)       
    },[])

    useEffect(()=>{
        getPostsByUserId(user.id)
    },[user])




  return (
    <div>

        <h3>FechDependencies</h3>

        <button onClick={ ()=>getUserById( getRandomId()  )}>change User</button>

        <hr style={{margin:"50px 0"}}/>

        <h2>{user.name ?? ''}</h2>

        <ul style={{textAlign: 'start'}}>
            {
                posts.map( post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default FechDependencies