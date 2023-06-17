import './users.css'
import { Link } from 'react-router-dom'

const UserCard = ({image, fullName, id}) => {
  return (

    <Link to={`/users/${id}`}>
      <div className='user-card-container' >
        <img src={image} alt={fullName} />
        <h4>{fullName}</h4>
      </div>
    </Link>
  )
}

export default UserCard