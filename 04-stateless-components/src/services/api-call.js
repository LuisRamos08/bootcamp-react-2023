import DB from "../mocks/users.json";
import userAdapter from "../adapters/user-adapter";

function apiCall(quantity = DB.users.length) {
  const { users } = DB;
  return userAdapter(
    quantity < users.length ? users.slice(0, quantity) : users
  );
}

//const apiCall = (quantity = DB.users.length) => userAdapter( quantity < DB.users.length ? users.slice(0, quantity) : users )

export default apiCall;
