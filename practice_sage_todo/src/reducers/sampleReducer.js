

function sampleReducer(state = {text:''} , action ) {

    console.log("sampleReducer.........." , action)

    const {type} = action

    let newState = state

    if(type === 'TODO_ADD_END'){

        newState = Object.assign({}, state, {text:action.payload})

    }
    return newState
}

export default sampleReducer