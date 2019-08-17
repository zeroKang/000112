import React, {Component, Fragment} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class TodoInput extends Component {

    constructor(){
        super()
        this.state = {title:null, complete:false, result:''}
    }



    sendData =()=>{

        const {title, complete} = this.state

        axios.post('http://localhost:8080/todo/new', {title,complete})
        .then(res => {
            if(res.data ==='success'){
                this.setState({result:'success'})
            }
        })

    }

    render(){

        if(this.state.result === ''){
            return(
                <div>
                    <input type="text" onChange={(e) => this.state.title = e.target.value} ></input>
                    <button onClick={this.sendData}>ADD  TODO</button>
                </div>
            )
        }

        return <Redirect to="/todo/modal/1"></Redirect>


    }

}

