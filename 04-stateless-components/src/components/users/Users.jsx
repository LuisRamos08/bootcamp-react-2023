import "./users.css";
import User from "../user/User";

const Users = ({ usersResponse }) => {
  return (
    <div className="users-container">
      {usersResponse.map((user) => {
        return (
          <User key={user.id} image={user.image} fullName={user.fullName} />
        );
      })}
    </div>
  );
};

export default Users;
