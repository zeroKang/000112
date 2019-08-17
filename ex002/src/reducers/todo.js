

function todoReducer (state = {content: []} , action) {

    console.log("todoReducer..............................",action)

    if(action.type === 'SUCCESS_LOAD'){
        console.log(action.payload)
        return {...action.payload}
    }


    return state
}

export default todoReducer