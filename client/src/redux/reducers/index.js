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
  if (action.type === "UPDATE_USERS") {
    console.log(action.payload);
    return [...action.payload];
  }
  return users;
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
