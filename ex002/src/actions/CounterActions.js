
export const ACTION1 ="COUNTER_ACTION1"

export const action1 = () => {
 
    console.log("action1.............")
    
    return (dispatch, getState) => {
        if(getState().countReducer.count < 10){
            dispatch( {type: ACTION1} )
        }  
    }
    
}
    