import axios from 'axios'


export const requestList = (dispatch, state, extra) => {

    console.log("requestList............." , extra )

    dispatch({type:'REQUEST_LIST'})

    setTimeout(() => {
        dispatch({type:'END_LIST'})
    }, 3000)

}



export const requestPage = (page) => {

    console.log("requestPage.............First")

    return (dispatch) => {
        console.log("requestPage........Second" )
        
        axios.get("http://localhost:8080/todo/pages/" + page)
        .then(res => {
            dispatch({type:'END_LIST', payload: res.data})
        })

    }
}


function todoReducer( state = {arr:[], loaded:false} , action ) {

    console.log("todoReducer..........", state, action);

    let newState = state

    if(action.type === 'REQUEST_LIST') {
        
        newState = Object.assign({}, state, {loaded:false})
        
    }else if(action.type === 'END_LIST'){

        newState = Object.assign({}, state, {loaded:true}, {arr:action.payload.content})
    }

    return newState

}

export default todoReducer