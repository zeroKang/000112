import React, {Component} from 'react'
import {connect} from 'react-redux'

class CountButton extends Component {

    sendAction = ( ) => {
    
        console.log("send Action")
        console.log(this.props)

        this.props.dispatch({type:'UP'})
    }
    
    render() {
        return( 
            <button onClick={() => this.sendAction() }>PUSH</button>
        )
    }
}

export default connect()(CountButton)


