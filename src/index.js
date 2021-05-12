import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
// compose - Composes functions from right to left.
// This is a functional programming utility, and is included in Redux as a convenience. 
// You might want to use it to apply several store enhancers in a row.
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
//store is where you're storing data and you have to pass it as a prop to the Provider
//reducers tell us what to do with our store based on certain actions
//and will return a new version of that store

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider >,
document.getElementById('root')
);