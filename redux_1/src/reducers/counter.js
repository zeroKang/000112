
const initialState = {count: 0}


export default function counter(state = initialState, action  ) {

    console.log("counter reducer.........................", action)

    let newState = state

    if(action.type === 'UP'){
        newState = {count: state.count + 1 }
    }

    console.log("newState",newState)

    return newState

}

