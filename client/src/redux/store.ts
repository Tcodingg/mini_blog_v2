import { rootReducer } from "./rootState";
import { createStore } from "redux";

const localStore = createStore(rootReducer);
