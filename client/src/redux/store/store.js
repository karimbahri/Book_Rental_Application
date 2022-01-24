import { createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers from "../reducers";

const store = createStore(reducers);
const persistor = persistStore(store);

export { store, persistor };
