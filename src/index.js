import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
// compose - Composes functions from right to left.
// This is a functional programming utility, and is included in Redux as a convenience. 
// You might want to use it to apply several store enhancers in a row.
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
//The <Provider> component makes the Redux store available to any nested 
//components that need to access the Redux store. 
//Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, 
//with the entire app's component tree inside of it.
import movieReducer from './redux/reducers/movieReducer'
import { BrowserRouter as Router } from 'react-router-dom';
//will use this in on e place in our application (one place only) 
//at the VERY TOP LEVEL, and it listens for any route changes in the browser, 
//and makes those changes accessible to any of it's children 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(movieReducer, composeEnhancers(applyMiddleware(thunk)));
//store is where you're storing data and you have to pass it as a prop to the Provider
//reducers tell us what to do with our store based on certain actions
//and will return a new version of that store

ReactDOM.render(

    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider >,
document.getElementById('root')
);