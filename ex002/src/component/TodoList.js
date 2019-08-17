import React, {Component} from 'react'

import {connect} from 'react-redux'

class TodoList extends Component {

    componentDidMount() {
        this.getData()
    }

    getData = ( ) => {
        this.props.dispatch({type:'REQUEST_FETCH', payload:{page:1}})
    }

    getPage = ( page) => {
        this.props.dispatch({type:'REQUEST_FETCH', payload:{page:page}})
    }
    
    render() {
        
        console.log(this.props)
        const list = this.props.content.map ( ({tno, title}) => <li key={tno}>{title}</li>)

        const pages = []

        for(let  i = 1; i <= this.props.totalPages ; i++){
            pages.push(<button key={i} onClick = {() => this.getPage(i) }>{i}</button>)
        }

        return(
            <div>
            <ul>
                {list}
            </ul>
            <div>
                {pages}
            </div>
            </div>
            
            
        )
    }
}

const mapStateToProps = ({todoReducer}) => {

    return {...todoReducer}

}

export default connect(mapStateToProps)(TodoList)




