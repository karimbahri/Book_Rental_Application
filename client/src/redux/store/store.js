import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers";

export const Store = createStore(reducers, applyMiddleware(thunk));
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
