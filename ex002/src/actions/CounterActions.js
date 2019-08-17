
export const ACTION1 ="COUNTER_ACTION1"

export const ACTION2 ="COUNTER_ACTION2"


export const action1 = () => {
 
    console.log("action1.............")
    
    return (dispatch, getState) => {
        if(getState().countReducer.count < 10){
            dispatch( {type: ACTION1} )
        }
        
        setTimeout(() => dispatch({type:ACTION2}), 3000)
    }
    
}
    