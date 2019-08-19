import axios from 'axios'


export const requestList = (dispatch, state) => {

    console.log("requestList............."  )

    dispatch({type:'REQUEST_LIST'})

    setTimeout(() => {
        dispatch({type:'END_LIST'})
    }, 3000)

}


function todoReducer( state = {arr:[], loaded:false} , action ) {

    console.log("todoReducer..........", state, action);

    let newState = state

    if(action.type === 'REQUEST_LIST') {
        
        newState = Object.assign({}, state, {loaded:false})
        
    }else if(action.type === 'END_LIST'){

        newState = Object.assign({}, state, {loaded:true})
    }

    return newState

}

export default todoReducer