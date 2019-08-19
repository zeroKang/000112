


export const fetchLogin =(dispatch, state) =>{

    console.log("fetchLogin........")

    const asyncFn = setTimeout(() => {

        dispatch({type:"END_LOGIN"})

    }, 3000)    

}




function loginReducer( state = {count:1} , action ) {

    console.log("loginReducer..........", state, action );


    return state

}

export default loginReducer