import { FETCH_USERS } from "../action";
const initialState = {
  userlist: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, userlist: action.payload };
    default:
      return state;
  }
};

export default userReducer;
