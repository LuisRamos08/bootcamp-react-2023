import DB from "../mocks/users.json";
import {usersAdapter, userAdapter} from "../adapters/user-adapter";

export const getUsers = (quantity = DB.users.length) => {
  const { users } = DB;
  return usersAdapter(
    quantity < users.length ? users.slice(0, quantity) : users
  );
}

export const getUser = ( id ) => {
  const { users } = DB;
  const user = users.find( user => user.id.toString() === id.toString() ) || users[0]
  return userAdapter( user )
}




