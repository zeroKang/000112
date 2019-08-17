import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

import createSagaMiddleware from 'redux-saga';

import mySaga from './middleware/todoSaga'

const sagaMiddleware = createSagaMiddleware() 

const store = createStore(rootReducer,   applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
