import sampleReducer from './sampleReducer'
import todoReducer from './todoReducer'

import {combineReducers} from "redux"

const rootReducer = combineReducers({sampleReducer, todoReducer})


export default rootReducer