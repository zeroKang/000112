import countReducer from './countReducer'

import loginReducer from './loginReducer'

import todoReducer from './todoReducer'


import { combineReducers } from 'redux';



const rootReducer = combineReducers({countReducer, loginReducer, todoReducer})



export default rootReducer
