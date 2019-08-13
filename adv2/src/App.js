import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Main from './views/Main'
import TodoList from './views/Todo/TodoList'

export default class App extends Component {

  constructor(){
    super()
  }

  render() {

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
          </ul>

          <Route path="/" exact component={Main}></Route>
          <Route path="/todoList/:page" component={TodoList}></Route>          
        
        </Router>
      </div>     
    )
  }
}
