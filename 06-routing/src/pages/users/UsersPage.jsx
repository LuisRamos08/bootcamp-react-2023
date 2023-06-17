import "./user-page.css";
import Title from "../../components/shared-components/Title";
import {getUsers} from "../../services/users-api";
import Users from "../../components/users/Users";
import { getSubTitle, getTitle } from "../../utils/users-page";
const UsersPage = () => {
  const usersResponse = getUsers(20);
  console.log(usersResponse);

  const title = getTitle();
  const subtitle = getSubTitle(usersResponse.length);
  
  return (
    <div className="user-page-container">
      <Title title={title} subtitle={subtitle} />
      <Users usersResponse={usersResponse} />
    </div>
  );
};

export default UsersPage;
