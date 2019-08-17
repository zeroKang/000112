import { ACTION1 } from "../actions/CounterActions";


function countReducer(state = {count:0} , action){

    console.log("countReducer....................")

    if(action.type === ACTION1) {

        return {count: state.count + 1}
        
    }

    return state
}


export default countReducer