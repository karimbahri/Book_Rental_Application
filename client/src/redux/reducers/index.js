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
    default:
      return users;
  }
};

const booksList = (books = [], action) => {
  if (action.type === "UPDATE_BOOKS") {
    return [...action.payload];
  } else {
    return books;
  }
};

const ordersList = (orders = [], action) => {};
const rootReducer = combineReducers({
  user: userData,
  users: usersList,
  books: booksList,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "users", "books"],
};

export default persistReducer(persistConfig, rootReducer);
