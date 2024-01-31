import { combineReducers, createStore } from "redux"
import counterReducer from "./reducer/reducer";

const rootreducer = combineReducers({
    counter:counterReducer
})

const store = createStore(rootreducer);
export default store;