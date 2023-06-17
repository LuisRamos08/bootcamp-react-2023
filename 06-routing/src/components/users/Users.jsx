import UserCard from "./UserCard"


const Users = ({usersResponse}) => {

  return (
    <div className="users-container">
      {
        usersResponse.map( user => {
          return (
            <UserCard
              key={user.id}
              image={user.image}
              fullName={user.fullName}
              id={user.id}
            />
          )
        } )
      }
    </div>
  )
}

export default Users