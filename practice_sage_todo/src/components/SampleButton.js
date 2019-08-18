import React , {Component} from 'react'
import {connect} from 'react-redux'


class SampleButton extends Component {

    render(){

        console.log(this.props)

        return(
            <div>
                <button onClick ={() => this.props.dispatch({type:"REQUEST_FETCH"})}>CLICK</button>
            </div>
        )
    }
}

export default connect()(SampleButton)

