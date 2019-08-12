import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect  } from "react-router-dom";

import Main from './views/Main'
import Board from './views/Board'
import Product from './views/Product'
import Login from './views/Login'
import MyPage from './views/MyPage'
import ConditionLink from './utils/ConditionLink'
import NotFound from './views/NotFound'
import Map from './views/Map'

export default class App extends Component{

  constructor(){
    super()
    this.state = {
      user: null
    }
  }

  loginProcess= ({userid, username}) => {

    this.setState({ user:{userid,username} })

  }

  render() {

    console.log("-------------------------------------")
    console.log(this.state.user)

    return(
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product/">Product</Link>
          </li>
          <li>
            <Link to="/board">Free Board</Link>
          </li>
          
          <ConditionLink condition = { () => { return this.state.user === null}}>
          <li>
            <Link to="/login">Login</Link>
          </li>
          </ConditionLink>
          <ConditionLink condition = { () => { return this.state.user != null}}>
          <li>
            <Link to="/mypage">MyPage</Link>
          </li>
          </ConditionLink>

          <li>
            <Link to="/mypage">Free Board</Link>
          </li>

          <li>
            <Link to="/mypage">MyPage</Link>
          </li>
          


        </ul>
        <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/board" component={Board}></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="/login" component={() => <Login fn= {this.loginProcess}></Login>}></Route>
        <Route path="/map" component={Map}></Route>
        
        <Route exact path="/mypage" render={() => (
          this.state.user === null ? (
            <Redirect to="/login"/>
          ) : (
            <MyPage/>
          )
        )}/>
        
        <Route component ={NotFound} ></Route>
        </Switch>
      </Router>
    )
  }

}