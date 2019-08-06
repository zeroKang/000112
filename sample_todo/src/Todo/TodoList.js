import React from 'react'


const TodoList = ({todos}) => {


    const list = todos.map( ({tno, title, complete}) => {
        return (
            <li key={tno}>{title} </li>
        )
    })

    return(
        <div>
            <h5>Todo List</h5>
            <ul>
                {list}
            </ul>
        </div>
        
    )
}
export default TodoList