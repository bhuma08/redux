import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './reducer/Reducer'

// const store = createStore(Reducer, composeWithDevTools(applyMiddleware));

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(Reducer);

export default store;