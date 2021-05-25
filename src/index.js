import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import movieReducer from './redux/reducers/movieReducer'
import { BrowserRouter as Router } from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(movieReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(

    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider >,
document.getElementById('root')
);