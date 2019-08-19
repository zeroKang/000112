import React,  {Component} from 'react'
import { connect } from 'react-redux';
import {requestList, requestPage} from '../reducers/todoReducer'

class TodoList extends Component {

    componentDidMount() {
        console.log("didMount.............")
        //this.props.dispatch(requestList)

        this.props.dispatch(requestPage(1))

    }

    render() {

        const current = this.props.loaded ? "LOADED":"LOADING..."

        const list = this.props.arr.map( ({tno, title}) => <li key={tno}> {title} </li> )

        return(
            <div>
                <h1>Todo List {current} </h1>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({todoReducer}) => {

    return {...todoReducer}
}



export default connect(mapStateToProps)(TodoList)