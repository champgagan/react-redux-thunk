export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: [
      { id: 1, username: "A one" },
      { id: 2, username: "B two" },
    ],
  };
};
