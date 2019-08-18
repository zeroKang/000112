
const initialState = {
    text:'',
    arr:[],
    totalPages: 0,
    page: 1
}


function todoReducer(state = initialState , action ) {

    console.log("todoReducer.........." , action)

    const {type} = action

    let newState = state

    if(type === 'FETCH_END'){

        newState = Object.assign({}, state, {text:action.payload})

    }else if(type === 'TODO_LIST_END') {

        console.log("todoReducer.." , action)

        const {content, totalPages, number} = action.payload

        newState = Object.assign({}, state, {arr:content, totalPages: totalPages, page: number + 1})

    }
    return newState
}

export default todoReducer