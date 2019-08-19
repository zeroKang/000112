import React,  {Component} from 'react'
import { connect } from 'react-redux';
import {requestList} from '../reducers/todoReducer'

class TodoList extends Component {

    componentDidMount() {
        console.log("didMount.............")
        this.props.dispatch(requestList)
    }

    render() {

        const current = this.props.loaded ? "LOADED":"LOADING..."

        return(
            <div>
                <h1>Todo List {current} </h1>
            </div>
        )
    }
}

const mapStateToProps = ({todoReducer}) => {

    return {...todoReducer}
}

export default connect(mapStateToProps)(TodoList)