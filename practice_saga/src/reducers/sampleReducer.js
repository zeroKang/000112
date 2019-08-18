

function sampleReducer(state = {text:''} , action ) {

    console.log("sampleReducer.........." , action)

    const {type} = action

    let newState = state

    if(type === 'FETCH_END'){

        newState = {text: action.payload}

    }
    return newState
}

export default sampleReducer