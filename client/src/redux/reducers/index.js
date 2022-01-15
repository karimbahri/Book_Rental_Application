import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userData = (state = null, action) => {
  if (action.type === "CURRENT_USER") {
    return action.payload;
  }
  return state;
};

const usersList = (users = [], action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return [...action.payload];
    // case "ADD_USER":
    //   return [...users, action.payload];
    default:
      return users;
  }
};

const rootReducer = combineReducers({
  user: userData,
  users: usersList,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "users"],
};

export default persistReducer(persistConfig, rootReducer);
