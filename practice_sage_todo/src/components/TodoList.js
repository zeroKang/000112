import React, {Component} from 'react'

import {connect} from 'react-redux'


class TodoList extends Component {

    componentDidMount() {

        this.props.dispatch({type:'REQUEST_TODO_LIST', payload:1})
    }

    render() {

        const {arr} = this.props
    
        const  list = arr.map( ({tno,title,complete}) => <li key={tno}>{title}</li>)
    
        return(
            <ul>
                <li>LIST</li>
                {list}
            </ul>
        )
    
    }
    
}


const mapStateToProps = ({todoReducer}) =>{

    console.log("TodoList mapStateToProps......." , todoReducer)

    return   {arr: todoReducer.arr}

}


export default connect(mapStateToProps)(TodoList)
