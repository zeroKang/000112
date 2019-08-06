import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class Todo extends Component {

    static count  = 1

    constructor(){
        super()
        this.state = {
            todos:[{tno:1 , title:'3시 미팅', complete: false}]
        }
    }

    addTodo = (title) => {
        console.log(title)

        const tno = ++Todo.count
        this.setState({todos: [...this.state.todos, {tno:tno, title:title, complete:false}]})

    }

    render() {
        return(
            <div>
                <TodoInput add= {this.addTodo}></TodoInput>
                <TodoList todos = {this.state.todos}></TodoList>
            </div>
        )
    }
}
