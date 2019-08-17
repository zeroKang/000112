import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Todo from './pages/Todo';
import Login from './pages/Login';

const listStyle = {
  listStyle: "none"
}

export default class App extends Component{

  state = {user:null}

  login =(obj) => {
    this.setState({user:obj});
    console.log("logined............")
  }

  render() {

    console.log("App.js render...........")

    return(
      <Router>
        <div className="App">
          <nav>
            <ul style ={listStyle}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mypage">MyPage</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Main}></Route>

          <Route path="/mypage" component={MyPage}></Route>

          <Route path="/todo" component={Todo}></Route>

          {this.state.user === null ?
            <Route path="/login" component={() => <Login login={this.login}></Login>}></Route>
          :
            <Redirect to="/"></Redirect>
          }
        </div>
      </Router>
    )
  }
}

