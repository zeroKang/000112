import React , {Component} from 'react'

import {connect} from 'react-redux'
import { fetchLogin } from '../reducers/loginReducer';



class LoginPanel extends Component {

    render() {

        const doLogin = () => {
            this.props.dispatch( fetchLogin )
        }

        return(
            <button onClick= {doLogin}>LOGIN</button>
        )
    }
}



export default connect()(LoginPanel)