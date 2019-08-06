import React,  {Component} from 'react'


export default class TodoInput extends Component {

    constructor(props){
        super()
        this.state = {title: ''}
        this.add = props.add
    }

    changeTitle = (event) => {

        const value = event.target.value
        this.setState({title:value})   

        console.log(this.state)
    }

    addClick = () => {
        this.add(this.state.title)
        this.setState({title:''})
    }

    render() {
        return(
            <div>
                <input type='text' placeholder="Input Title" 
                    value={this.state.title}
                    onChange = {this.changeTitle}></input>
                <button onClick={this.addClick}>ADD</button>
            </div>
        )
    }

}