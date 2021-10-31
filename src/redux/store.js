import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import bookReducer from "./reducer/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk)

const rootReducers = combineReducers({
  books: bookReducer
})
export const store = createStore(rootReducers, composeWithDevTools(middleware));