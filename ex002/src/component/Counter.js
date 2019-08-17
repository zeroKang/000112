import React from 'react'
import {connect} from 'react-redux'

function Counter(props) {

    return(
        <div>
            <h1>{props.count}</h1>
        </div>
    )

}

const mapStateToProps = ({countReducer}) => {

    return {count:countReducer.count}

}

export default connect(mapStateToProps)(Counter)