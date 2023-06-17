import { getUser } from '../../services/users-api';
import { useParams } from 'react-router-dom'
import './users.css'
const UserDetail = () => {

    const { id } = useParams()

    console.log(useParams())
    const user = getUser( id );

  return (
    <div>
        <h3>{user.fullName}</h3>
        <img src={user.image} alt={`${user.fullName}`} />
    </div>
  )
}

export default UserDetail