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
            totalPages: 1,
            isLoading: false,
        }
    }

    componentDidMount(){

        this.getAjaxData()

    }

    changePage (page){
        this.setState({page:page, isLoading:true})
        this.getAjaxData(page)
    }


    getAjaxData(page = 1) {

        console.log("get Ajax page........."+page)

        axios.get("http://localhost:8080/todo/pages/"+ page)
            .then(res => {
                console.log(res.data)
                this.setState( Object.assign({},res.data, {isLoading:false}))
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
            linkArr.push(<Link to={`/todoList/${i}`} key={i} onClick={() => this.changePage(i)} replace>&nbsp;&nbsp;&nbsp;{i}&nbsp;&nbsp;&nbsp;</Link>)
        }


        return(
            <div>
            <h1>Page: {this.props.match.params.page} {this.state.isLoading?"LOADIND":"FININSED"}</h1>
            {this.state.isLoading == false ?
                <div>
                <ul>
                    {list}
                </ul>
                <div>
                    {linkArr}
                </div>
                </div>
            : <h3>Loading............</h3>
            }

            </div>
        )
    }
}
