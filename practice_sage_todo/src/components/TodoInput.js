import React, {Component} from 'react'

import {connect} from 'react-redux'




class TodoInput extends Component {

    state = {title:''}

    render() {
        return(
        <div>
            <h3>Todo Input</h3>
            <input type="text" onChange = {(e) => this.setState({title:e.target.value})} ></input>
            <button onClick = {() =>  this.props.dispatch({type:'REQUEST_TODO_ADD', payload: this.state.title} ) }>ADD</button>
        </div>
        )
   }

}

export default connect()(TodoInput)