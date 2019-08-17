import { combineReducers } from 'redux';

import countReducer from './counter'



const rootReducer = combineReducers( {countReducer} )


export default rootReducer