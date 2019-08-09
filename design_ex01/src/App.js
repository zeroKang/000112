import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './views/Main'
import Products from './views/Products'
import Accounts from './views/Accounts'
import MyPage from './views/MyPage'

import Todo from './Todo'

import { Card } from '@material-ui/core';

import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import ProductList from './views/Products';

import PrivateRoute from './utils/PrivateRoute'

function App() {

  const userid = 'user00'

  const checkCondition = () => {
    return userid||false
  }

  const fail = <h1 >ERROR</h1>

  return (
    <Router>
       <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <PrivateRoute condition={checkCondition} fail= {fail}>
              <Link to="/mypage">MyPage</Link>
            </PrivateRoute>
            
          </li>
        </ul>
      </div>
      <Route exact path="/" component={Main} />
      <Switch>
        <Route path="/products/:pno" component={ProductList} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/todo" component={Todo} />
        <PrivateRoute condition={checkCondition} fail= {fail}>
          <Route path="/mypage" component={MyPage} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}


const cardStyle = {
  display: 'block',
  width: '30vw',
  transitionDuration: '0.3s',
  height: '45vw'
}

export default App;
