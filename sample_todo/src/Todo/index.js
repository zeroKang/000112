import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class Todo extends Component {

    static count  = 1

    constructor(){
        super()
        this.state = {
            todos:[{tno:1 , title:'3시 미팅', complete: true}]
        }
    }

    checkChange = (tno) => {
        console.log(tno)

        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const index = this.state.todos.indexOf(target)

        const tempArr = this.state.todos

        tempArr[index] = Object.assign(target, {complete: !target.complete})

        console.log(tempArr)

        this.setState({todos:tempArr})

    }

    addTodo = (title) => {
        console.log(title)

        const tno = ++Todo.count
        this.setState({todos: [...this.state.todos, {tno:tno, title:title, complete:false}]})

    }

    render() {
        return(
            <div>
                <TodoInput add= {this.addTodo} ></TodoInput>
                <TodoList todos = {this.state.todos} change = {this.checkChange}></TodoList>
            </div>
        )
    }
}
