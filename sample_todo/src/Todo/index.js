import React, {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoPanel from './TodoPanel';

export default class Todo extends Component {

    static count  = 1

    constructor(){
        super()
        this.state = {
            todos:[{tno:1 , title:'3시 미팅', complete: true}],
            type:'ALL'
        }
    }

    filterTodos = (type) => {
        
        const newstate = Object.assign(this.state, {type:type})

        this.setState(newstate)

    }

    checkChange = (tno) => {
        console.log(tno)

        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const index = this.state.todos.indexOf(target)

        const tempArr = this.state.todos

        tempArr[index] = Object.assign(target, {complete: !target.complete})

        console.log(tempArr)

        this.setState({todos:tempArr, type:this.state.type})

    }

    addTodo = (title) => {
        console.log(title)

        const tno = ++Todo.count
        this.setState({todos: [...this.state.todos, {tno:tno, title:title, complete:false}]})

    }

    render() {
        return(
            <div>
                <TodoPanel filter = {this.filterTodos}></TodoPanel>
                <TodoInput add= {this.addTodo} ></TodoInput>
                <TodoList todos = {this.state.todos} change = {this.checkChange} type={this.state.type}></TodoList>
            </div>
        )
    }
}
