// import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import nameReducer from "./reducer/nameReducer";
import { createStore, applyMiddleware } from 'redux';






export const store = createStore(nameReducer, devToolsEnhancer(applyMiddleware(thunk)))