import authReducer from "./Reducer/authSlice";
import { combineReducers, createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const middleware = [thunk]

const reducer = combineReducers({
  authDetails: authReducer
});
const initialState = {};
const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;