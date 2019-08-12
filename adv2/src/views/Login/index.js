import React, {Component} from 'react'

export default class Login extends Component {

    constructor(props){
        super(props)
        
    }

    clickLogin = () => {
        
        alert("login")
        this.props.loginFn({user:'Hong Dil Dong'})

    }

    render() {
        return(
            <div>
                <button onClick={this.clickLogin} >Login</button>
            </div>
        )
    }
}