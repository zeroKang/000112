import React from 'react'


const TodoList = ({todos, change, type}) => {


    const arr = todos.filter(obj => {
        if(type === 'DONE'){
            return obj.complete === true
        }else if(type === 'TO DO'){
            return obj.complete === false
        }else{
            return true
        }
    })

    const list = arr.map( ({tno, title, complete}) => {

        const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}

        return (
            <li key={tno} style={style}>
                {title} 
                <input type='checkbox' checked = {complete ?'checked':''} onChange={() => change(tno)} ></input> </li>
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