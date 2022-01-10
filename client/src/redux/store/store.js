import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducers from "../reducers";

const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
/* ******************************************************** */
// const saveToLocalStorage = (state) => {
//   console.log("save state to store");
//   try {
//     localStorage.setItem("state", JSON.stringify(state));
//   } catch (e) {
//     console.error(e);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     console.log("load state to store");
//     const stateStr = localStorage.getItem("state");
//     return stateStr ? JSON.parse(stateStr) : undefined;
//   } catch (e) {
//     console.error(e);
//     return undefined;
//   }
// };

// const persistedStore = loadFromLocalStorage();

// export const Store = createStore(
//   reducers,
//   persistedStore,
//   applyMiddleware(thunk)
// );

// Store.subscribe(() => {
//   saveToLocalStorage(Store.getState());
// });
