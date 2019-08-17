import React, {Component, Fragment} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class TodoList extends Component {

    constructor(props){
        console.log("TodoList constructor....")
        super(props)
    }

    async componentDidMount() {
        console.log("TodoList did mount")
    }

    getServerData(page){

        const jquery = window.$
        
        let content;

        jquery.ajax({
            url: 'http://localhost:8080/todo/pages/' +page,
            type:'get',
            dataType:'json',
            async: false,
            success: function(result) {
                console.log(result)
                content = result.content
            }
        })
        return content
        
    }


    render() {

        console.log("TodoList render")

        const page = this.props.match.params.page

        console.log("page:" + page)

        const arr = this.getServerData(page)

        console.log(arr)

        const list = arr.map( ({tno,title}) => {return(
            <li key={tno}> {title} </li>
        )} )

        console.log("-----------------------------")

        return(
            <ul>
                {list}     
            </ul>
        )
    }

}
