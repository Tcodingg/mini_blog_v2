import { rootReducer } from "./rootState";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const localStore = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);
