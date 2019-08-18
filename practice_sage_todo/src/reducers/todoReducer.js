function todoReducer(state = {text:'', arr:[]} , action ) {

    console.log("todoReducer.........." , action)

    const {type} = action

    let newState = state

    if(type === 'FETCH_END'){

        newState = Object.assign({}, state, {text:action.payload})

    }else if(type === 'TODO_LIST_END') {
        console.log("todoReducer.." , action)

        newState = Object.assign({}, state, {arr:action.payload.content})

    }
    return newState
}

export default todoReducer