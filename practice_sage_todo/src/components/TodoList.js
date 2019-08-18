import React, {Component} from 'react'

import {connect} from 'react-redux'


class TodoList extends Component {

    componentDidMount() {

        this.props.dispatch({type:'REQUEST_TODO_LIST', payload:1})
    }

    render() {

        const {arr, page, totalPages} = this.props
    
        const  list = arr.map( ({tno,title,complete}) => <li key={tno}>{title}</li>)
    
        return(
            <div>
                <h3>Page {page}</h3>
                <h4>TotalPages:  {totalPages}</h4>
            <ul>
                <li>LIST</li>
                {list}
            </ul>
            </div>
        )    
    }
}


const mapStateToProps = ({todoReducer}) =>{

    console.log("TodoList mapStateToProps......." , todoReducer)

    return {
        arr: todoReducer.arr, 
        page: todoReducer.page,
        totalPages: todoReducer.totalPages
    }

}


export default connect(mapStateToProps)(TodoList)
