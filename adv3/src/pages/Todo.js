import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoModal from '../components/TodoModal';

export default class Todo extends Component {

    constructor() {
        console.log("Todo constructor.......")
        super()
    }

    componentDidUpdate() {
        console.log("Todo did update")
    }



    render() {
        console.log("Todo render............")
        return(
            <Router>
                <nav>
                    <Link to="/todo/register">TodoInput</Link>
                    <Link to="/todo/list/1">1</Link>
                    <Link to="/todo/list/2">2</Link>
                    <Link to="/todo/list/3">3</Link>

                </nav>

            <Grid container >
            <Grid item xs={12}>
              <div>
                  <h1>Todo</h1>

                  <Route path="/todo/register" exact component={TodoInput}></Route>  
                  <Route path="/todo/list/:page" component={TodoList}></Route>
                  <Route path="/todo/modal/:msg" component={TodoModal}></Route>  
                  

              </div>
            </Grid>      
          </Grid>
          </Router>

        )
    }

}


