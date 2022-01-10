import { combineReducers, createStore, applyMiddleware } from "redux";
import usersReducer from "./users-reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    usersPage: usersReducer
});



let store = createStore(reducers, applyMiddleware(thunk));


export default store;