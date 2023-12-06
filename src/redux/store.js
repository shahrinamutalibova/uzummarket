import {createStore, combineReducers, applyMiddleware} from 'redux';
import postReducer from "./reducers/postReducer";
import thunk from 'redux-thunk';
import albumReducer from "./reducers/albumReducer"
import todoReducer from "./reducers/albumReducer"

export default createStore(combineReducers({
    postReducer,albumReducer,todoReducer 
}), applyMiddleware(thunk))