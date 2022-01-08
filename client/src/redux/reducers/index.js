import { combineReducers } from "redux";

const userData = (state = null, action) => {
  if (action.type === "CURRENT_USER") {
    return action.payload;
  }
  return state;
};

const listOfUsers = (state = [], action) => {
  if (action.type === "GET_USERS") {
    console.log(action.payload);
    return [...state, ...action.payload];
  }
  return state;
};
export default combineReducers({
  user: userData,
  users: listOfUsers,
});
