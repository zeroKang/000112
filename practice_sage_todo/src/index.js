import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import sagaConfig from './middlewares/sagaConfig'

import {Provider} from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
  )
  
  // then run the saga
sagaMiddleware.run(sagaConfig)

ReactDOM.render(
<Provider store = {store}>
    <App/>
</Provider>    
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
