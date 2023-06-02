import "./user-page.css";
import Title from "../../components/Title";
import Users from "../../components/users/Users";
import apiCall from "../../services/api-call";
import { getSubTitle, getTitle } from "../../utils/users-page";
const UsersPage = () => {
  const usersResponse = apiCall(20);

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
