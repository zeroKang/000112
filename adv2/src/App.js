import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Main from './views/Main'
import Login from './views/Login'
import TodoList from './views/Todo/TodoList'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      user:null,
      page:1
    }
  }

  changeLoginState = (userObj) => {
    this.setState({user:userObj})
  }


  render() {

    const {user} = this.state

    return(
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todoList/1">TodoList</Link>
            </li>
            {user == null ? <li><Link to="/login">Login</Link></li>: <div></div> }   
            
            {user != null ? <li><Link to="/todoList/1">TodoList</Link></li>: <div></div> }              
                                  
          </ul>

          <Route path="/" exact component={Main}></Route>
          <Route path="/todoList/:page" component={TodoList}></Route>          
          
        
        </Router>
      </div>     
    )
  }
}
