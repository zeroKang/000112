import { combineReducers } from 'redux';

import countReducer from './counter'

import todoReducer from './todo'


const rootReducer = combineReducers( {countReducer, todoReducer} )


export default rootReducer