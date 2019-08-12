import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios'
import { getDefaultWatermarks } from 'istanbul-lib-report';



export default class  TodoList extends Component {
 
    constructor(props){
        super(props)
        console.log('constructor', props)
        this.state = {
            content:[], 
            page:props.match.params.page||1,
            totalPages: 1
        }
    }

    componentDidMount(){

        this.getAjaxData()

    }


    getAjaxData() {

        const page = this.state.page

        console.log("get Ajax page........."+page)

        axios.get("http://localhost:8080/todo/pages/"+ page)
            .then(res => {
                console.log(res.data)
                this.setState(res.data)
            })
    }

    render(){

        const list = this.state.content.map( ({tno , title }) => {
            return(
                <li key={tno}>{title}</li>
            )
        })

        const linkArr = []
        for(let i = 1; i <= this.state.totalPages; i++){
            //linkArr.push(<span>&nbsp;&nbsp;&nbsp;<a href={`/todoList/${i}`}>{i}</a></span>)
            linkArr.push(<Link to={`/todoList/${i}`} key={i}>&nbsp;&nbsp;&nbsp;{i}&nbsp;&nbsp;&nbsp;</Link>)
        }


        return(
            <div>
            <h1>Page: {this.state.page}</h1>
            <ul>
                {list}
            </ul>


            <div>
                {linkArr}
            </div>

 

            </div>
        )
    }
}
