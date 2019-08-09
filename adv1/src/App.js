import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './views/Main'
import Board from './views/Board'
import Product from './views/Product'


export default class App extends Component{

  constructor(){
    super()
    this.state = {
      user: null
    }
  }

  render() {
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
        </ul>
        <Route exact path="/" component={Main}></Route>
        <Route path="/board" component={Board}></Route>
        <Route path="/product" component={Product}></Route>
      </Router>
    )
  }

}