import React from 'react'
import {connect} from 'react-redux'


function CountDisplay(props){

    return(
        <div>
            <h1>Count Value: {props.count}</h1>
        </div>
    )

}

const mapStateToProps = ({countReducer})  => {

    console.log(countReducer)

    return  {count: countReducer.count}
}

export default connect(mapStateToProps)(CountDisplay)



