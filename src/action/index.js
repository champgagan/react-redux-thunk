import axios from "axios";
export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => dispatch(dispatchUsers(response.data)));
  };
};

function dispatchUsers(data) {
  console.log("data", data);
  return {
    type: FETCH_USERS,
    payload: data,
  };
}
