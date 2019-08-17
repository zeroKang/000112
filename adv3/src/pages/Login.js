import React, {Component, Fragment} from 'react'


export default class Login extends Component {

    state = {userid:'', userpw:''}

    render() {
      return(
        <div>
            <h1>Login Page</h1>
            <div>
                USERID: <input type='text' onChange={(e) => { this.userid = e.target.value}}></input>
            </div>
            <div>
                USERPW: <input type='text' onChange={(e) => { this.userpw = e.target.value}}></input>
            </div>
            <div>
                <button onClick={() => this.props.login(this.state)}>CLICK</button>
            </div>            
        </div>
      )
    }
}