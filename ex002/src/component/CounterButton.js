import React, {Component} from 'react'
import {connect} from 'react-redux'

import {action1} from '../actions/CounterActions'

class CounterButton extends Component  {

    render(){
        return(
        <button onClick= {this.props.sendData}> CLICK </button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendData:() =>  dispatch(action1())
    }
}

export default connect(null,mapDispatchToProps)(CounterButton)